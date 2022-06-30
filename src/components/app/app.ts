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
    const sources: HTMLElement = document.querySelector('.sources')!;
    const leftArrow: HTMLElement = document.querySelector('.left-arrow')!;
    const rightArrow: HTMLElement = document.querySelector('.right-arrow')!;

    sources.addEventListener('click', (e: MouseEvent) =>
      this.controller.getNews(e, (data: IArticlesData) => this.view.drawNews(data))
    );
    this.controller.getSources((data: ISourcesData) => this.view.drawSources(data));

    leftArrow.addEventListener('click', () => {
      this.controller.getSources((data: ISourcesData) => this.view.changeSourcesPage(data, -1));
    });

    rightArrow.addEventListener('click', () => {
      this.controller.getSources((data: ISourcesData) => this.view.changeSourcesPage(data, 1));
    });
  }
}

export default App;
