export interface ISource {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ISourcesData {
  sources: ISource[];
  status: string;
}
