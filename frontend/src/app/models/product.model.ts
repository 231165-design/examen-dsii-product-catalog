import { Category } from './category.model';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt?: string;
  category: Category;
}