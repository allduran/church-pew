export interface Article {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  content: string;
  thumbnail: string;
  author: string;
}

export interface RSSResponse {
  status: string;
  feed: {
    title: string;
    description: string;
    link: string;
  };
  items: Article[];
}
