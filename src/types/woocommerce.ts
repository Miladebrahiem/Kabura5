export interface WooProduct {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  regularPrice: string;
  productCategories: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
  image?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
}

export interface WooProductsData {
  products: {
    nodes: WooProduct[];
  };
}