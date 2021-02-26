import { Component } from '@angular/core';
import { Item } from '../Interfaces/Item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: Item[] = [];

  constructor(private cart: CartService) {}


  delete(item:Item){
    this.cart.deleteItem(item);
  }

  ngOnInit(){
    this.items = [];
    this.items = this.cart.itemsInCart;
  }

  deleteAll(){
    this.items = [];
    this.cart.deleteAll();
  }


}
