import {
  filterProductsByType,
  getProductsOnPage,
  sortProducts,
} from './helper.js';
import { Products } from '../db/models/Product.js';
import { ProductName } from '../types/DetailedProduct.js';
import { SortFields, queryParams } from '../types/QueryParams.js';
import { Product } from '../types/Product.js';
import { Sequelize } from 'sequelize';

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
  return Products.findAll({
    order: [[Sequelize.literal('"fullPrice" - "price"'), 'DESC']],
    limit: AMOUNT_OF_DISCOUNTED,
  });
};

export const getNewProducts = async() => {
  return getAllProducts({
    sortBy: SortFields.Year,
    sortOrder: 'DESC',
    limit: AMOUNT_OF_NEW.toString(),
  });
};
