export interface Iproduct {
    name: string;
    author: string;
    price: number;
    productImg?:string,
    category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'| 'Gravel';
    description:string;
    quantity :number;
    inStock:boolean;
  }