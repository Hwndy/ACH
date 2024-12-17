export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
}