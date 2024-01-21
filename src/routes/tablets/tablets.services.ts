import { readFileSync } from 'fs';
import { Tablet } from '../../types/DetailedProduct';

const tablets: Tablet[] = JSON.parse(
  readFileSync('./public/tablets.json', 'utf8'),
);

export const getAllTablets = () => {
  return tablets;
};

export const getTabletByID = (id: string) => {
  return tablets.find((accessory) => accessory.id === id);
};

export const getTabletsByNameSpace = (namespaceId: string) => {
  return tablets.filter((tablet) => tablet.namespaceId === namespaceId);
};
