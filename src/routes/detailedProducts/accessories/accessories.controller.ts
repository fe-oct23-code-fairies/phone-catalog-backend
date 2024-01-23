import type { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
  getRecommendedForDP,
} from '../detailedProducts.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllDP(ProductName.Accessories));
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const accessory = getDPById(id, ProductName.Accessories);

  if (!accessory) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessory);
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const accessories = getDPByNamespace(namespaceId, ProductName.Accessories);

  if (accessories.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessories);
};

export const getRecommended = (_: ERequest, res: EResponse) => {
  const accessories = getRecommendedForDP(ProductName.Accessories);

  if (accessories.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessories);
};
