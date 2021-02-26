import { Component } from '@angular/core';
import { Item } from '../Interfaces/Item';
import { Order } from '../Interfaces/Order';
import { CartService } from '../services/cart.service';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: Item[] = [];
  totalPrice: number = this.cart.totalPrice;

  constructor(private cart: CartService,private orders:OrderServiceService) {}


  delete(item:Item){
    this.cart.deleteItem(item);
    this.cart.refreshTotalPrice();
    this.totalPrice = this.cart.totalPrice;
  }

  ngOnInit(){
    this.items = [];
    this.items = this.cart.itemsInCart;
    this.cart.refreshTotalPrice();
    this.totalPrice = this.cart.totalPrice;
  }


  deleteAll(){
    this.totalPrice = 0;
    this.items = [];
    this.cart.deleteAll();
    this.cart.refreshTotalPrice();
    this.totalPrice = this.cart.totalPrice;
  }

  order(){
    console.log('items:',this.items);
    this.orders.addOrder(this.items,this.totalPrice);
  }


}
