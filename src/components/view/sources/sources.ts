import './sources.css';
import { ISource } from '../../model';

class Sources {
  draw(data: [ISource]) {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone: HTMLDivElement = <HTMLDivElement>sourceItemTemp.content.cloneNode(true);

      (<HTMLSpanElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLDivElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (<HTMLElement>document.querySelector('.sources')).append(fragment);
  }

  showMessage(message: string) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('empty-message');
    messageElement.textContent = message;
    (<HTMLElement>document.querySelector('.sources')).innerHTML = '';
    (<HTMLElement>document.querySelector('.sources')).appendChild(messageElement);
  }
}

export default Sources;
