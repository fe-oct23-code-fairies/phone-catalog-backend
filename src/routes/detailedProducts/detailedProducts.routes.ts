import { Router } from 'express';
import {
  getAll,
  getByID,
  getRecommended,
} from './detailedProducts.controller.js';

export const detailedProductsRouter = Router();

detailedProductsRouter.get('/', getAll);

detailedProductsRouter.get('/:id', getByID);

detailedProductsRouter.get('/:id/recommended', getRecommended);
