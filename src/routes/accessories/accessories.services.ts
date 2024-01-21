import { readFileSync } from 'fs';
import type { Accessory } from '../../types/DetailedProduct.js';

const accessories: Accessory[] = JSON.parse(
  readFileSync('./public/accessories.json', 'utf8'),
);

export const getAllAccessories = () => {
  return accessories;
};

export const getAccessoryByID = (id: string) => {
  return accessories.find((accessory) => accessory.id === id);
};

export const getAccessoriesByNameSpace = (namespaceId: string) => {
  return accessories.filter(
    (accessory) => accessory.namespaceId === namespaceId,
  );
};
