import { Router } from 'express';
import { getAll, getByID, getByNamespace } from './tablets.controller.js';

export const tabletsRouter = Router();

tabletsRouter.get('/', getAll);

tabletsRouter.get('/:id', getByID);

tabletsRouter.get('/namespace/:namespaceId', getByNamespace);
