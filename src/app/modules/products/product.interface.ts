export interface Iproduct {
    name: string;
    author: string;
    price: number;
    productImg?:string,
    category: 'Fantasy'
    | 'Science Fiction'
    | 'Romance'
    | 'Mystery/Thriller'
    | 'Biography/Autobiography'
    | 'Self-Help'
    | 'History'
    | 'Science'
    | 'Business'
    | 'Technology'
    | 'Design'
    | 'Children’s Books';
    description:string;
    quantity :number;
    inStock:boolean;
  }