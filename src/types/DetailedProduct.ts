interface Description {
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
  colorsAvailable: string[];
  color: string;
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

export interface Phone extends DetailedProduct {}

export interface Tablet extends DetailedProduct {}

export interface Accessory extends Omit<DetailedProduct, 'camera' | 'zoom'> {}
