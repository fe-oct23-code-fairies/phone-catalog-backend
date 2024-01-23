import { Request as ERequest, Response as EResponse } from 'express';
import { getAllProducts, getProductByID } from '../products.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllProducts());
};

export const getByID = (req: ERequest, res: EResponse) => {
  const id = +req.params.id;

  if (isNaN(id)) {
    res.status(400).send('Incorrect id format');

    return;
  }

  const product = getProductByID(id);

  if (!product) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(product);
};
