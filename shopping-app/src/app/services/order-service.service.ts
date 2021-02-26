import { Injectable } from '@angular/core';
import { Item } from '../Interfaces/Item';
import { Order } from '../Interfaces/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  orders: Order[] = [];

  constructor() { }

  addOrder(items:Item[],price:number){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    const dateString = mm + '/' + dd + '/' + yyyy;

    this.orders.push({ID:this.orders.length,Items:items,Price:price,Date:dateString});
    console.log('nuevas',this.orders);
  }

}
