import { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
} from '../detailedProducts.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllDP(ProductName.Phones));
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const phone = getDPById(id, ProductName.Phones);

  if (!phone) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phone);
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const phones = getDPByNamespace(namespaceId, ProductName.Phones);

  if (phones.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phones);
};
