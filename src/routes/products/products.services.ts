import { readFileSync } from 'fs';
import { Product } from '../../types/Product.js';

const products: Product[] = JSON.parse(
  readFileSync('./public/products.json', 'utf8'),
);

export const getAllProducts = () => {
  return products;
};

export const getProductByID = (id: number) => {
  return products.find((product) => product.id === id);
};
