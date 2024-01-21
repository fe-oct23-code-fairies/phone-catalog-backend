import { Request as ERequest, Response as EResponse } from 'express';
import {
  getAllPhones,
  getPhoneByID,
  getPhonesByNameSpace,
} from './phones.services';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllPhones());
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;

  const phone = getPhoneByID(id);

  if (!phone) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(getPhoneByID(id));
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const phones = getPhonesByNameSpace(namespaceId);

  if (phones.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(phones);
};
