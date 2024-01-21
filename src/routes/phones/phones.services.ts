import { readFileSync } from 'fs';
import { Phone } from '../../types/DetailedProduct';

const phones: Phone[] = JSON.parse(
  readFileSync('./public/phones.json', 'utf8'),
);

export const getAllPhones = () => {
  return phones;
};

export const getPhoneByID = (id: string) => {
  return phones.find((phone) => phone.id === id);
};

export const getPhonesByNameSpace = (namespaceId: string) => {
  return phones.filter((phone) => phone.namespaceId === namespaceId);
};
