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
    console.log(this.itemsInCart);
  }

  deleteItem(item:Item){
    const indexOfDeleted = this.itemsInCart.indexOf(item);

    item.Count = 0;

    if(indexOfDeleted > -1){
      this.itemsInCart.splice(indexOfDeleted,1);
      this.length -= 1;
    }

    console.log(this.itemsInCart);

   
  }

  deleteAll(){
    this.itemsInCart.forEach(item => {
      item.Count = 0;
    });
    this.itemsInCart = [];
    this.length = 0;
  }
}
