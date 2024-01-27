/* eslint-disable max-len */

import cors from 'cors';
import express from 'express';
import path from 'path';

import { accessoriesRouter } from './routes/detailedProducts/accessories/accessories.routes.js';
import { phonesRouter } from './routes/detailedProducts/phones/phones.routes.js';
import { tabletsRouter } from './routes/detailedProducts/tablets/tablets.routes.js';
import { productsRouter } from './routes/products/products.routes.js';

export const serverInit = () => {
  const app = express();
  const dirname = path.dirname('.');

  app.use(express.json());
  app.use(cors());

  app.get('/', (_, res) => {
    res.send('https://www.youtube.com/watch?v=G510jeWiaV0');
  });

  app.use('/static', express.static(path.join(dirname, 'public')));

  app.use('/accessories', accessoriesRouter);
  app.use('/phones', phonesRouter);
  app.use('/tablets', tabletsRouter);
  app.use('/products', productsRouter);

  return app;
};
