import { Router } from 'express';
import {
  getAll,
  getByID,
  getDiscounted,
  getNew,
} from './products.controller.js';

export const productsRouter = Router();

productsRouter.get('/', getAll);

productsRouter.get('/discount', getDiscounted);

productsRouter.get('/new', getNew);

productsRouter.get('/:id', getByID);

productsRouter.get('/discount', getDiscounted);

productsRouter.get('/new', getNew);
