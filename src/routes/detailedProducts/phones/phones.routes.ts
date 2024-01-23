import { Router } from 'express';
import {
  getAll,
  getByID,
  getByNamespace,
  getRecommended,
} from './phones.controller.js';

export const phonesRouter = Router();

phonesRouter.get('/', getAll);

phonesRouter.get('/:id', getByID);

phonesRouter.get('/:id/recommended', getRecommended);

phonesRouter.get('/namespace/:namespaceId', getByNamespace);
