/// <reference types='react-scripts' />

interface Good {
  id: number;
  name: string;
  color: string;
  weight: number;
  amount: number;
  price: number;
  imgUrl: string;
  description: string;
}

type SortBy = 'name' | 'amount';
