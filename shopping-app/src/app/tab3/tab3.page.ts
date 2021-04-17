import { Component } from '@angular/core';
import { Order } from '../Interfaces/Order';
import { OrderServiceService } from '../services/order-service.service';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  vorders: Order[] = []
  timer=0;
  ordenes:any=[
{"Pedido":"3232",
"fecha":"12/04/200",
"total":"200",
"cancelar":false},
{"Pedido":"4343",
"fecha":"12/04/200",
"total":"43434",
"cancelar":true},{"Pedido":"43434",
"fecha":"12/04/200",
"total":"434343",
"cancelar":true}]
  constructor(private base:DatabaseService) {}

  async ngOnInit(){
    
  }

  cancelarOrden(pedido:any){
    console.log("orden cancelada:" + pedido)
  }
}