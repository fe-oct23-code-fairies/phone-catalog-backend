import { Router } from 'express';
import { getAll } from './phones.controller.js';

export const phonesRouter = Router();

phonesRouter.get('/', getAll);
