import { DetailedDB, ProductName } from '../../types/DetailedProduct.js';
import { db } from '../dataGetter.js';
import { getRecommendedForPN } from '../products.services.js';

export const getAllDP = (productName: ProductName) => {
  return db[productName as keyof DetailedDB];
};

export const getDPById = (id: string, productName: ProductName) => {
  return db[productName as keyof DetailedDB].find(
    (product) => product.id === id,
  );
};

export const getDPByNamespace = (
  namespaceId: string,
  productName: ProductName,
) => {
  return db[productName as keyof DetailedDB].filter(
    (product) => product.namespaceId === namespaceId,
  );
};

export const getRecommendedForDP = (productName: ProductName) => {
  return getRecommendedForPN(productName);
};
