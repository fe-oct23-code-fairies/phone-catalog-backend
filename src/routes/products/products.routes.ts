import { Router } from 'express';
import { getAll, getByID } from './products.controller.js';

export const productsRouter = Router();

productsRouter.get('/', getAll);

productsRouter.get('/:id', getByID);
