import { OrderItem } from 'sequelize';

interface Where {
  [key: string]: string;
}

export const getRandomIndexes = (amount: number, maxValue: number) => {
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

export const filterProductsByType = (productType?: string) => {
  const where: Where = {};

  if (productType && productType.trim()) {
    where.category = productType;
  }

  return where;
};

export const sortProducts = (sortBy?: string, sortOrder?: string) => {
  const order: OrderItem = ['id', 'ASC'];

  if (sortBy && sortBy.trim()) {
    order[0] = sortBy;
  }

  if (sortOrder && sortOrder.trim()) {
    order[1] = sortOrder;
  }

  return order;
};

export const getProductsOnPage = (limit?: string, page?: string) => {
  let limitNumber;
  let offset;

  if (limit && limit.trim() && !isNaN(+limit)) {
    limitNumber = +limit;

    if (page && page.trim() && !isNaN(+page) && +page >= 1) {
      offset = (+page - 1) * limitNumber;
    }
  }

  return [limitNumber, offset];
};
