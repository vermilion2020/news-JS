import News from './news/news';
import Sources from './sources/sources';
import { IArticlesData, ISourcesData } from '../model';

export class AppView {
  news: News;
  sources: Sources;

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
      this.sources.draw(data.sources);
    } else {
      this.news.showMessage('There are no available sources!');
    }
  }
}

export default AppView;
