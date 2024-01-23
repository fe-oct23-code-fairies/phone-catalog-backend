/* eslint-disable no-unused-vars */
export enum SortFields {
  Name = 'name',
  Price = 'price',
  Year = 'year',
}

export interface queryParams {
  productType: string | undefined;
  limit: string | undefined;
  page: string | undefined;
  sortBy: SortFields | undefined;
  sortOrder: string | undefined;
}
