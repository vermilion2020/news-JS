import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'e791737bb7a2401bb0b6f2a4281797c0',
    });
  }
}

export default AppLoader;
