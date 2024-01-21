import { readFileSync } from 'fs';
import { Accessory } from '../../types/DetailedProduct';

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
