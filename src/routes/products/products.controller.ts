import { Request as ERequest, Response as EResponse } from 'express';
import {
  getAllProducts,
  getDiscountedProducts,
  getNewProducts,
  getProductByID,
} from '../products.services.js';
import { SortFields } from '../../types/QueryParams.js';

export const getAll = async(req: ERequest, res: EResponse) => {
  const { productType, limit, page, sortBy, sortOrder } = req.query;

  res.status(200).send(
    await getAllProducts({
      productType: productType as string,
      limit: limit as string,
      page: page as string,
      sortBy: sortBy as SortFields,
      sortOrder: sortOrder as string,
    }),
  );
};

export const getByID = async(req: ERequest, res: EResponse) => {
  const id = +req.params.id;

  if (isNaN(id)) {
    res.status(400).send('Incorrect id format');

    return;
  }

  const product = await getProductByID(id);

  if (!product) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(product);
};

export const getDiscounted = async(_: ERequest, res: EResponse) => {
  const discounted = await getDiscountedProducts();

  res.status(200).send(discounted);
};

export const getNew = async(_: ERequest, res: EResponse) => {
  const newProducts = await getNewProducts();

  res.status(200).send(newProducts);
};
