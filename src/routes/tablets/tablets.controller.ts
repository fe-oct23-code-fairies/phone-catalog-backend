import { Request as ERequest, Response as EResponse } from 'express';
import {
  getAllTablets,
  getTabletByID,
  getTabletsByNameSpace,
} from './tablets.services.js';

export const getAll = (_: ERequest, res: EResponse) => {
  res.status(200).send(getAllTablets());
};

export const getByID = (req: ERequest, res: EResponse) => {
  const { id } = req.params;
  const tablet = getTabletByID(id);

  if (!tablet) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablet);
};

export const getByNamespace = (req: ERequest, res: EResponse) => {
  const { namespaceId } = req.params;
  const tablets = getTabletsByNameSpace(namespaceId);

  if (tablets.length === 0) {
    res.status(400).send('Not found');

    return;
  }

  res.status(200).send(tablets);
};
