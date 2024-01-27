import { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
  getRecommendedDP,
} from '../detailedProducts.services.js';

export const getAll = async(_: ERequest, res: EResponse) => {
  res.status(200).send(await getAllDP(ProductName.Tablets));
};

export const getByID = async(req: ERequest, res: EResponse) => {
  const { id } = req.params;
  const tablet = await getDPById(id);

  if (!tablet) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablet);
};

export const getByNamespace = async(req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const tablets = await getDPByNamespace(namespaceId);

  if (tablets.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablets);
};

export const getRecommended = async(_: ERequest, res: EResponse) => {
  const tablets = await getRecommendedDP(ProductName.Tablets);

  if (tablets.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablets);
};
