import { Component } from '@angular/core';
import { Order } from '../Interfaces/Order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  vorders: Order[] = []
  timer=0;
  constructor(private orderser:OrderServiceService) {}

  ngOnInit(){
    this.vorders = this.orderser.orders;
    this.startTimer();
  }

  startTimer(){
    var intervalVar =  setInterval(function(){
      this.timer++;
    }.bind(this),1000)
  } 
  
  cancelOrder(order:Order){
    this.orderser.cancelOrder(order);
  }
}