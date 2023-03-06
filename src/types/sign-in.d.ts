export type GetInfo = {
  signIn: {
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    hour: string;
    products: Array<{
      id: string;
      image: string;
      name: string;
      listPrice: string;
      price: string;
      installments: number;
    }>;
  };
};
