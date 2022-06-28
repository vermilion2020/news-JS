export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string; 
  source: {
    id: string;
    name: string;
  },
  title: string;
  url: string;
  urlToImage: string;
}

export interface IArticlesData {
  articles: [IArticle];
  status: string;
  totalResults: number;
}