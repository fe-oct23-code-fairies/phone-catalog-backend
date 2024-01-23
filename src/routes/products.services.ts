import type { ProductName } from '../types/DetailedProduct.js';
import type { queryParams } from '../types/QueryParams.js';
import { products } from './dataGetter.js';
import {
  filterProductsByType,
  getProductsOnPage,
  getRandomIndexes,
  sortProducts,
} from './helper.js';

const AMOUNT_OF_RECOMMENDED = 12;
const AMOUNT_OF_DISCOUNTED = 12;
const AMOUNT_OF_NEW = 12;

export const getAllProducts = (queryParams: queryParams) => {
  let productsToView = [...products];

  productsToView = filterProductsByType(
    productsToView,
    queryParams.productType,
  );

  sortProducts(productsToView, queryParams.sortBy, queryParams.sortOrder);

  productsToView = getProductsOnPage(
    productsToView,
    queryParams.limit,
    queryParams.page,
  );

  return productsToView;
};

export const getProductByID = (id: number) => {
  return products.find((product) => product.id === id);
};

export const getDPByProductName = (productName: ProductName) => {
  return products.filter((product) => product.category === productName);
};

export const getRecommendedForPN = (productName: ProductName) => {
  const productOfThisType = products.filter(
    (product) => product.category === productName,
  );

  if (productOfThisType.length <= AMOUNT_OF_RECOMMENDED) {
    return productOfThisType;
  }

  const randomIndexes = getRandomIndexes(
    AMOUNT_OF_RECOMMENDED,
    productOfThisType.length,
  );

  return productOfThisType.filter((_, index) => randomIndexes.includes(index));
};

export const getDiscountedProducts = () => {
  const sortedByDiscount = [...products].sort(
    (a, b) => b.fullPrice - b.price - a.fullPrice + a.price,
  );

  return sortedByDiscount.slice(0, AMOUNT_OF_DISCOUNTED);
};

export const getNewProducts = () => {
  const sortedByDiscount = [...products].sort((a, b) => b.year - a.year);

  return sortedByDiscount.slice(0, AMOUNT_OF_NEW);
};
