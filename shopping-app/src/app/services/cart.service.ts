import { Injectable } from '@angular/core';
import { Item } from '../Interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itemsInCart: Item[] = [];
  length: number = 0;

  constructor() { }

  addItem(item:Item){
    this.itemsInCart.push(item);
    this.length += 1;
  }
}
