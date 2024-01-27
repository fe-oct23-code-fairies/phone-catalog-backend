import type { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
  getRecommendedDP,
} from '../detailedProducts.services.js';

export const getAll = async(_: ERequest, res: EResponse) => {
  res.status(200).send(await getAllDP(ProductName.Accessories));
};

export const getByID = async(req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const accessory = await getDPById(id);

  if (!accessory) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessory);
};

export const getByNamespace = async(req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const accessories = await getDPByNamespace(namespaceId);

  if (accessories.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessories);
};

export const getRecommended = async(_: ERequest, res: EResponse) => {
  const accessories = await getRecommendedDP(ProductName.Accessories);

  if (accessories.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessories);
};
