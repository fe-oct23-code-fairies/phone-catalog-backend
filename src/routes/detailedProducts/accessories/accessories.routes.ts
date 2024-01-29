import { Router } from 'express';
import { getAll } from './accessories.controller.js';

export const accessoriesRouter = Router();

accessoriesRouter.get('/', getAll);
