import { IArticlesData, ISourcesData } from '../model';

class Loader {
  baseLink: string;
  options: { [key: string]: string | number };
  constructor(baseLink: string, options: { [key: string]: string | number }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(
    { endpoint, options = {} }: { endpoint: string; options?: { [key: string]: string | number } },
    callback: (data: T) => void = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  async errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { [key: string]: string | number }, endpoint: string) {
    const urlOptions: { [key: string]: string | number } = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res: Response) => this.errorHandler(res))
      .then((res: Response) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
