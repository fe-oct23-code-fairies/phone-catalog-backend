import { Router } from 'express';
import { getAll, getByID } from './products.controller';

export const productsRouter = Router();

productsRouter.get('/', getAll);

productsRouter.get('/:id', getByID);
