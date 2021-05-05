export interface IProduct {
  department : string,
  category : string,
  styleNo : string,
  color : string,
  price : string,
  sizes : string,
  stock : string,
  description : string
}

export class Product implements IProduct {
  department = '';
  category = '';
  styleNo = '';
  color = '';
  price = '';
  sizes = '';
  stock = '';
  description = '';
}

export interface IProductRes {
  type: string,
  message: string
}

export class ProductRes implements IProductRes {
  type = '';
  message = '';
}

