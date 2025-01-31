export interface Iproduct {
    name: string;
    brand: string;
    model:string,
    price: number;
    productImg?:string,
    category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric'| 'Gravel';
    description:string;
    quantity :number;
    inStock:boolean;
  }