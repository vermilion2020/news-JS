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
    }
    //TODO add empty array handling
  }

  drawSources(data: ISourcesData) {
    if (data.sources.length) {
      this.sources.draw(data.sources);
    }
    //TODO add empty array handling
  }
}

export default AppView;
