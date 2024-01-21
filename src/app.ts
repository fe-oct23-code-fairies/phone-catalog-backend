/* eslint-disable no-console */
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { accessoriesRouter } from './routes/accessories/accessories.routes';
import { phonesRouter } from './routes/phones/phones.routes';
import { productsRouter } from './routes/products/products.routes';
import { tabletsRouter } from './routes/tablets/tablets.routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/accessories', accessoriesRouter);
app.use('/phones', phonesRouter);
app.use('/products', productsRouter);
app.use('/tablets', tabletsRouter);

app.listen(process.env.PORT);

console.log(`App is listening on port ${process.env.PORT}`);
