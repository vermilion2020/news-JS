import { IArticlesData, ISourcesData } from '../model';
import AppLoader from './appLoader';

class AppController extends AppLoader {
  getSources(callback: (data: ISourcesData) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: (data: IArticlesData) => void) {
    let target: HTMLElement = <HTMLElement>e.target;
    const newsContainer: HTMLElement = <HTMLElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string = <string>target.getAttribute('data-source-id');
        if (newsContainer!.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = <HTMLElement>target.parentNode;
    }
  }
}

export default AppController;
