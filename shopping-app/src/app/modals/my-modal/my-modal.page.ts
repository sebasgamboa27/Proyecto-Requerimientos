import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Item } from 'src/app/Interfaces/Item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {

  items: Item[];
  Title: string;

  constructor(private modalController: ModalController,
    private navParams: NavParams, private cart: CartService) { }

  ngOnInit() {
    console.table(this.navParams);
    this.items = []
    this.items = this.navParams.data.items;
    this.Title = this.navParams.data.Title;
  }

  async closeModal(){
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  addItem(item:Item){

    item.Count += 1;

    if(!this.cart.itemsInCart.includes(item)){
      this.cart.addItem(item)
    }
    
  }

  deleteItem(item:Item){

    item.Count -= 1;

    if(this.cart.itemsInCart.includes(item) && item.Count < 1){
      this.cart.deleteItem(item)
    }
  }

}
