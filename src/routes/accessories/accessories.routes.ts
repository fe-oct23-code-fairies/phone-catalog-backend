import { Router } from 'express';
import { getAll, getByID, getByNamespace } from './accessories.controller.js';

export const accessoriesRouter = Router();

accessoriesRouter.get('/', getAll);

accessoriesRouter.get('/:id', getByID);

accessoriesRouter.get('/namespace/:namespaceId', getByNamespace);
