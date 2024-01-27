/* eslint-disable no-unused-vars */
export interface Description {
  title: string;
  text: string[];
}

interface DetailedProduct {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  coloursAvailable: string[];
  colour: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export const enum ProductName {
  Phones = 'phones',
  Tablets = 'tablets',
  Accessories = 'accessories',
}

export interface Phone extends DetailedProduct {}

export interface Tablet extends DetailedProduct {}

export interface Accessory extends Omit<DetailedProduct, 'camera' | 'zoom'> {}

export interface DetailedDB {
  accessories: Accessory[];
  phones: Phone[];
  tablets: Tablet[];
}
