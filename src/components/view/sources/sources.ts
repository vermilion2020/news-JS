import './sources.css';
import { ISource } from '../../model';

class Sources {
  draw(data: [ISource]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone: HTMLDivElement = <HTMLDivElement>sourceItemTemp.content.cloneNode(true);

      (<HTMLSpanElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLDivElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (<HTMLElement>document.querySelector('.sources')).append(fragment);
  }
}

export default Sources;
