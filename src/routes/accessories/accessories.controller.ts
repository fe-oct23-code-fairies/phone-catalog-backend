import type { Request as ERequest, Response as EResponse } from 'express';
import {
  getAccessoriesByNameSpace,
  getAccessoryByID,
  getAllAccessories,
} from './accessories.services';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllAccessories());
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const accessory = getAccessoryByID(id);

  if (!accessory) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessory);
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const accessories = getAccessoriesByNameSpace(namespaceId);

  if (accessories.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(accessories);
};
