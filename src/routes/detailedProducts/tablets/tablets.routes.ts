import { Router } from 'express';
import { getAll } from './tablets.controller.js';

export const tabletsRouter = Router();

tabletsRouter.get('/', getAll);
