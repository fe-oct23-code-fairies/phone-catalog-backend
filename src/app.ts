/* eslint-disable max-len */
/* eslint-disable no-console */

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { addRouting } from './routes/routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

addRouting(app);

app.listen(process.env.PORT);

console.log(`App is listening on port ${process.env.PORT}`);
