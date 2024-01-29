import { Request as ERequest, Response as EResponse } from 'express';
import {
  getAllDP,
  getDPById,
  getRecommendedDP,
} from './detailedProducts.services.js';
import { getProductByItemID } from '../products.services.js';
import { Product } from '../../types/Product.js';

export const getAll = async(_: ERequest, res: EResponse) => {
  res.status(200).send(await getAllDP());
};

export const getByID = async(req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const product = await getDPById(id);

  if (!product) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(product);
};

export const getRecommended = async(req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const product = (await getProductByItemID(id))?.dataValues as Product;

  if (!product) {
    res.status(400).send('Not found');

    return;
  }

  const phones = await getRecommendedDP(product.category);

  if (phones.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phones);
};
