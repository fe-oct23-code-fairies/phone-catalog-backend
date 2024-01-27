import { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
  getRecommendedDP,
} from '../detailedProducts.services.js';

export const getAll = async(_: ERequest, res: EResponse) => {
  res.status(200).send(await getAllDP(ProductName.Phones));
};

export const getByID = async(req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const phone = await getDPById(id);

  if (!phone) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phone);
};

export const getByNamespace = async(req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const phones = await getDPByNamespace(namespaceId);

  if (phones.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phones);
};

export const getRecommended = async(_: ERequest, res: EResponse) => {
  const phones = await getRecommendedDP(ProductName.Phones);

  if (phones.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phones);
};
