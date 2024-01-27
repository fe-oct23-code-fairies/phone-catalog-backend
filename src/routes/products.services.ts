import {
  filterProductsByType,
  getProductsOnPage,
  sortProducts,
} from './helper.js';
import { Products } from '../db/models/Product.js';
import { ProductName } from '../types/DetailedProduct.js';
import { queryParams } from '../types/QueryParams.js';
import { Product } from '../types/Product.js';

const AMOUNT_OF_DISCOUNTED = 12;
const AMOUNT_OF_NEW = 12;

export const getAllProducts = async(queryParams: queryParams) => {
  const where = filterProductsByType(queryParams?.productType);

  const sorting = sortProducts(queryParams?.sortBy, queryParams?.sortOrder);

  const [limit, offset] = getProductsOnPage(
    queryParams.limit,
    queryParams.page,
  );

  return (
    await Products.findAll({
      where,
      order: [sorting],
      limit,
      offset,
    }).catch(() => [])
  ).map((product) => product.get({ plain: true })) as Product[];
};

export const getProductByID = (id: number) => {
  return Products.findByPk(id);
};

export const getDPByProductName = (productName: ProductName) => {
  return Products.findAll({
    where: {
      category: productName,
    },
  });
};

export const getDiscountedProducts = async() => {
  const products = await getAllProducts({});

  const sortedByDiscount = [...products].sort(
    (a, b) => b.fullPrice - b.price - a.fullPrice + a.price,
  );

  return sortedByDiscount.slice(0, AMOUNT_OF_DISCOUNTED);
};

export const getNewProducts = async() => {
  const products = await getAllProducts({});

  const sortedByDiscount = [...products].sort((a, b) => b.year - a.year);

  return sortedByDiscount.slice(0, AMOUNT_OF_NEW);
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
