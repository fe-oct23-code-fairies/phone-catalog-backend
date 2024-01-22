import { Request as ERequest, Response as EResponse } from 'express';
import { getAllProducts, getProductByID } from './products.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllProducts());
};

export const getByID = (req: ERequest, res: EResponse) => {
  const id = +req.params.id;

  if (isNaN(id)) {
    res.status(400).send('Invalid id');
  }

  res.status(200).send(getProductByID(id));
};
