import type { Request as ERequest, Response as EResponse } from 'express';
import { ProductName } from '../../../types/DetailedProduct.js';
import { getAllDPByType } from '../detailedProducts.services.js';
import { SortFields } from '../../../types/QueryParams.js';

export const getAll = async(req: ERequest, res: EResponse) => {
  const { limit, page, sortBy, sortOrder } = req.query;

  res.status(200).send(
    await getAllDPByType(ProductName.Accessories, {
      limit: limit as string,
      page: page as string,
      sortBy: sortBy as SortFields,
      sortOrder: sortOrder as string,
    }),
  );
};
