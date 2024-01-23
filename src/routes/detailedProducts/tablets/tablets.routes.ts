import { Router } from 'express';
import {
  getAll,
  getByID,
  getByNamespace,
  getRecommended,
} from './tablets.controller.js';

export const tabletsRouter = Router();

tabletsRouter.get('/', getAll);

tabletsRouter.get('/:id', getByID);

tabletsRouter.get('/:id/recommended', getRecommended);

tabletsRouter.get('/namespace/:namespaceId', getByNamespace);
