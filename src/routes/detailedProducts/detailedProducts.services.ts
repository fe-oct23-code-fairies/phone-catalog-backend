import { getDPByProductName } from '../products.services.js';
import { DetailedDB, ProductName } from '../../types/DetailedProduct.js';
import { db } from '../dataGetter.js';

export const getAllDP = (productName: ProductName) => {
  return getDPByProductName(productName);
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
