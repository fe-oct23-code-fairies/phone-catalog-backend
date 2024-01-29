import { queryParams } from 'types/QueryParams.js';
import { DetailedProducts } from '../../db/models/DetailedProduct.js';
import { ProductName } from '../../types/DetailedProduct.js';
import { getRandomIndexes } from '../helper.js';
import { getAllProducts, getProductsNotEqToPN } from '../products.services.js';

const AMOUNT_OF_RECOMMENDED = 12;

export const getAllDP = () => {
  return DetailedProducts.findAll();
};

export const getAllDPByType = (
  productName: ProductName,
  queryParams: queryParams,
) => {
  return getAllProducts({ productType: productName, ...queryParams });
};

export const getDPById = (id: string) => {
  return DetailedProducts.findByPk(id);
};

export const getRecommendedDP = async(productName: string) => {
  const products = await getProductsNotEqToPN(productName);

  if (products.length <= AMOUNT_OF_RECOMMENDED) {
    return products;
  }

  const randomIndexes = getRandomIndexes(
    AMOUNT_OF_RECOMMENDED,
    products.length,
  );

  // return products.filter((_, index) => randomIndexes.includes(index));
  return randomIndexes.map((index) => products[index]);
};
