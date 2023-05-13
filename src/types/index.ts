export type BookArrayType = {
  product: BookType[];
};

export type BookType = {
  author: string;
  cover: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
  price: number;
  sales: number;
  slug: string;
  likes_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

export type CategoriesArrayType = {
  category: {
    id: number;
    name: string;
    created_at: string;
  }[];
};
