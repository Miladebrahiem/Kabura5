export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  url: string;
  childItems?: {
    nodes: MenuItem[];
  };
}

export interface MenuDishMeta {
  type: 'vegan' | 'vegetarian' | 'meat';
  price: number;
}