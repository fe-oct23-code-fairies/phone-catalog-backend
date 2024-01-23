import { SortFields } from '../types/QueryParams.js';
import { Product } from '../types/Product.js';

export const getRandomIndexes = (
  amount: number,
  maxValue: number,
) => {
  const indexes: number[] = [];

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * maxValue);

    if (indexes.includes(randomIndex)) {
      i--;

      continue;
    }

    indexes.push(randomIndex);
  }

  return indexes;
};

export const filterProductsByType = (
  products: Product[],
  productType?: string,
) => {
  let productsToView = [...products];

  if (productType?.trim()) {
    productsToView = productsToView.filter(
      products => products.category === productType?.trim(),
    );
  }

  return productsToView;
};

export const sortProducts = (
  productsToView: Product[],
  sortBy?: string,
  sortOrder?: string,
) => {
  if (sortBy?.trim()) {
    productsToView.sort((a, b) => {
      let result;

      switch (sortBy?.trim()) {
        case SortFields.Price:
          result = a.fullPrice - b.fullPrice;
          break;

        case SortFields.Year:
          result = a.year - b.year;
          break;

        case SortFields.Name:
          result = a.name.localeCompare(b.name);
          break;

        default:
          return 0;
      }

      if (sortOrder && sortOrder.trim() === 'desc') {
        result *= -1;
      }

      return result;
    });
  }
};

export const getProductsOnPage = (
  products: Product[],
  limit?: string,
  page?: string,
) => {
  let productsToView = [...products];

  if (limit?.trim() && !isNaN(+limit)) {
    const limitNumber = +limit;

    if (
      page?.trim()
      && !isNaN(+page)
      && +page >= 1
    ) {
      productsToView = productsToView.slice(
        (+page - 1) * (limitNumber),
      );
    }

    productsToView.length = productsToView.length < limitNumber
      ? productsToView.length
      : limitNumber;
  }

  return productsToView;
};
