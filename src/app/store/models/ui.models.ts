import {Observable} from 'rxjs';

export interface ItemService {
  id: string;
  price: number;
  productId: string;
  serviceId: string;
}


export interface ItemProduct {
  id: string;
  title: string;
  photos: ItemImage[];
  descriptionText: string;
  minPrice: number;
  services: Observable<ItemService>;
}

export interface ItemImage{
  image: string;
  url: string;
  index: number;
}

export interface SelectedItemService {
  id: string;
  price: number;
  service: string;
}

export interface SelectedProductItem {
  avatar: string;
  total: number;
  title: string;
  products: SelectedItemService[];
}
