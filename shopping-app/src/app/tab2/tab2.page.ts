import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Item } from '../Interfaces/Item';
import { Order } from '../Interfaces/Order';
import { CartService } from '../services/cart.service';
import { DatabaseService } from '../services/database.service';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: Item[] = [];
  totalPrice: number = this.cart.totalPrice;

  constructor(private cart: CartService,private orders:OrderServiceService,public alertController: AlertController,
    public toastController: ToastController,public loadingController: LoadingController,private base: DatabaseService) {}

  ngOnInit(){}

  ionViewWillEnter(){
    this.items = this.cart.itemsInCart;
    this.cart.refreshTotalPrice();
    this.totalPrice = this.cart.totalPrice;
  }

  delete(item:Item){
    this.cart.deleteItem(item);
    this.cart.refreshTotalPrice();
    this.totalPrice = this.cart.totalPrice;
  } 

  deleteAll(){
    this.totalPrice = 0;
    this.cart.deleteAll();
    this.cart.refreshTotalPrice();
    this.items = [];
    this.totalPrice = this.cart.totalPrice;
  }

  order(){
    this.orders.addOrder(this.items,this.totalPrice);
    this.base.sp_InsertPedido('En proceso',Date.toString(),this.totalPrice,1);
    this.deleteAll();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar orden?',
      message: 'Precio: '+ this.totalPrice,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Orden cancelada: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.orders.addOrder(this.items,this.totalPrice);
            this.presentLoading();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Su orden ha sido confirmada!',
      duration: 1500
    });
    toast.present();
    this.deleteAll();
  }


}
