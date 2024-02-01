/* eslint-disable max-len */

import cors from 'cors';
import express from 'express';
import path from 'path';

import { accessoriesRouter } from './routes/detailedProducts/accessories/accessories.routes.js';
import { phonesRouter } from './routes/detailedProducts/phones/phones.routes.js';
import { tabletsRouter } from './routes/detailedProducts/tablets/tablets.routes.js';
import { productsRouter } from './routes/products/products.routes.js';
import { detailedProductsRouter } from './routes/detailedProducts/detailedProducts.routes.js';
import { authRouter } from './routes/auth/auth.routes.js';

export const serverInit = () => {
  const app = express();
  const dirname = path.dirname('.');

  app.use(express.json());
  app.use(cors({ origin: process.env.ORIGIN }));

  app.get('/', (_, res) => {
    res.send('https://www.youtube.com/watch?v=G510jeWiaV0');
  });

  app.use('/static', express.static(path.join(dirname, 'public')));

  app.use('/auth', authRouter);

  app.use('/accessories', accessoriesRouter);
  app.use('/phones', phonesRouter);
  app.use('/tablets', tabletsRouter);

  app.use('/products', productsRouter);
  app.use('/products-detailed', detailedProductsRouter);

  return app;
};
