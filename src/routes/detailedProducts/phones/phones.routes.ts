import { Router } from 'express';
import { getAll, getByID, getByNamespace } from './phones.controller.js';

export const phonesRouter = Router();

phonesRouter.get('/', getAll);

phonesRouter.get('/:id', getByID);

phonesRouter.get('/namespace/:namespaceId', getByNamespace);
