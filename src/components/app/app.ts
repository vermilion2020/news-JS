import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IArticlesData, ISourcesData } from '../model';

class App {
  controller: AppController;
  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    const sources: HTMLElement | null = document.querySelector('.sources');

    sources?.addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data: IArticlesData) => this.view.drawNews(data))
    );
    this.controller.getSources((data: ISourcesData) => this.view.drawSources(data));
  }
}

export default App;
