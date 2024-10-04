export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
}

export interface DetailProduct {
  height: number;
  baseExperience: number;
  types: Array<{slot: number, type: {name: string, url: string }}>;
  weight: number;
}

export interface ResponseData<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export interface SaleProduct {
 id: string;
 codeProduct: string;
 nameProduct: string;
 price: string;
}
