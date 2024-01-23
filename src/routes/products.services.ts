import { ProductName } from '../types/DetailedProduct';
import { products } from './dataGetter.js';

export const getAllProducts = () => {
  return products;
};

export const getProductByID = (id: number) => {
  return products.find((product) => product.id === id);
};

export const getDPByProductName = (productName: ProductName) => {
  return products.filter((product) => product.category === productName);
};
