import { getRandomIndexes } from '../helper.js';
import { DetailedProducts } from '../../db/models/DetailedProduct.js';
import { ProductName } from '../../types/DetailedProduct.js';
import { getAllProducts } from '../products.services.js';

const AMOUNT_OF_RECOMMENDED = 12;

export const getAllDP = (productName: ProductName) => {
  return getAllProducts({ productType: productName });
};

export const getDPById = (id: string) => {
  return DetailedProducts.findByPk(id);
};

export const getDPByNamespace = (namespaceId: string) => {
  return DetailedProducts.findAll({
    where: {
      namespaceId,
    },
  });
};

export const getRecommendedDP = async(productName: ProductName) => {
  const products = await getAllProducts({ productType: productName });

  if (products.length <= AMOUNT_OF_RECOMMENDED) {
    return products;
  }

  const randomIndexes = getRandomIndexes(
    AMOUNT_OF_RECOMMENDED,
    products.length,
  );

  return products.filter((_, index) => randomIndexes.includes(index));
};

export const getRecommendedForDP = (productName: ProductName) => {
  return getRecommendedForPN(productName);
};
