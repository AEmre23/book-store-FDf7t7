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

export interface RegisterAction {
  action_register: {
    created_at: string;
    email: string;
    şifre: string;
    id: number;
    name: string;
  };
}

export interface LoginAction {
  action_login: {
    message: string;
    token: string;
  };
}

export type LogAndReg = LoginAction | RegisterAction;

export interface GetCoverImageAction {
  action_product_image: {
    url: string;
  };
}
