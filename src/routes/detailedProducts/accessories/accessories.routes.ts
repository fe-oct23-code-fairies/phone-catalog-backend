import { Router } from 'express';
import {
  getAll,
  getByID,
  getByNamespace,
  getRecommended,
} from './accessories.controller.js';

export const accessoriesRouter = Router();

accessoriesRouter.get('/', getAll);

accessoriesRouter.get('/:id', getByID);

accessoriesRouter.get('/:id/recommended', getRecommended);

accessoriesRouter.get('/namespace/:namespaceId', getByNamespace);
