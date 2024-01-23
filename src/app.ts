/* eslint-disable max-len */
/* eslint-disable no-console */

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import { accessoriesRouter } from './routes/detailedProducts/accessories/accessories.routes.js';
import { phonesRouter } from './routes/detailedProducts/phones/phones.routes.js';
import { tabletsRouter } from './routes/detailedProducts/tablets/tablets.routes.js';
import { productsRouter } from './routes/products/products.routes.js';

dotenv.config();

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

app.listen(process.env.PORT);

console.log(`App is listening on port ${process.env.PORT}`);
