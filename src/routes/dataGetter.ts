import { readFileSync } from 'fs';

import type {
  Accessory,
  DetailedDB,
  Phone,
  Tablet,
} from '../types/DetailedProduct.js';
import { Product } from '../types/Product.js';

const accessories: Accessory[] = JSON.parse(
  readFileSync('./public/accessories.json', 'utf8'),
);

const tablets: Tablet[] = JSON.parse(
  readFileSync('./public/tablets.json', 'utf8'),
);

const phones: Phone[] = JSON.parse(
  readFileSync('./public/phones.json', 'utf8'),
);

export const products: Product[] = JSON.parse(
  readFileSync('./public/products.json', 'utf8'),
);

export const db: DetailedDB = {
  accessories,
  tablets,
  phones,
};
