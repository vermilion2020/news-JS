import News from './news/news';
import Sources from './sources/sources';
import { IArticlesData, ISourcesData } from '../model';

export class AppView {
  news: News;
  sources: Sources;
  sourcesCurrentPage: number = 0;
  sourcesButtonsCount: number = 5;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IArticlesData) {
    if (data.articles.length) {
      this.news.draw(data.articles);
    } else {
      this.news.showMessage('There are no news of selected source!');
    }
  }

  drawSources(data: ISourcesData) {
    if (data.sources.length) {
      const startItem = this.sourcesCurrentPage * this.sourcesButtonsCount;
      const EndItem = startItem + this.sourcesButtonsCount;
      startItem + this.sourcesButtonsCount;
      console.log(startItem);
      console.log(EndItem);
      data.sources =
        EndItem > data.sources.length - 1 ? data.sources.slice(startItem) : data.sources.slice(startItem, EndItem);
      this.sources.draw(data.sources);
    } else {
      this.news.showMessage('There are no available sources!');
    }
  }

  changeSourcesPage(data: ISourcesData, pageChange: number) {
    this.sourcesCurrentPage += pageChange;
    const itemsCount = data.sources.length - 1;
    const maxPage = Math.ceil(itemsCount / this.sourcesButtonsCount);
    if (this.sourcesCurrentPage > 0) {
      document.querySelector('.left-arrow')!.classList.remove('disabled');
    } else {
      document.querySelector('.left-arrow')!.classList.add('disabled');
    }
    if (this.sourcesCurrentPage < maxPage) {
      document.querySelector('.right-arrow')!.classList.remove('disabled');
    } else {
      document.querySelector('.right-arrow')!.classList.add('disabled');
    }
    if (this.sourcesCurrentPage > maxPage) {
      this.sourcesCurrentPage = maxPage;
      return;
    } else if (this.sourcesCurrentPage < 0) {
      this.sourcesCurrentPage = 0;
      return;
    }
    this.drawSources(data);
  }
}

export default AppView;
