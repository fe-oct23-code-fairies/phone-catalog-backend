import { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import {
  getAllDP,
  getDPById,
  getDPByNamespace,
} from '../detailedProducts.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllDP(ProductName.Tablets));
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;
  const tablet = getDPById(id, ProductName.Tablets);

  if (!tablet) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablet);
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const tablets = getDPByNamespace(namespaceId, ProductName.Tablets);

  if (tablets.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablets);
};
