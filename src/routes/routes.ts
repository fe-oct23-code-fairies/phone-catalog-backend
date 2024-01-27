/* eslint-disable max-len */

import { Express, static as static_ } from 'express';
import path from 'path';

import { accessoriesRouter } from './detailedProducts/accessories/accessories.routes.js';
import { phonesRouter } from './detailedProducts/phones/phones.routes.js';
import { tabletsRouter } from './detailedProducts/tablets/tablets.routes.js';
import { productsRouter } from './products/products.routes.js';

const dirname = path.dirname('../');

export const addRouting = (app: Express) => {
  app.get('/', (_, res) => {
    res.send('https://www.youtube.com/watch?v=G510jeWiaV0');
  });

  app.use('/static', static_(path.join(dirname, 'public')));

  app.use('/accessories', accessoriesRouter);
  app.use('/phones', phonesRouter);
  app.use('/tablets', tabletsRouter);
  app.use('/products', productsRouter);
};
