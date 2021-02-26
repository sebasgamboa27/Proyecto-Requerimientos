import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../Interfaces/Category';
import { Item } from '../Interfaces/Item';
import { MyModalPage } from '../modals/my-modal/my-modal.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Categories: Category[] = [];

  Items: Item[] = []

  Bebidas: Item[] = []

  itemsToUse: Item[]= []
  Type: string;



  names: string[] = ['Bebidas','Snacks','Lacteos y Huevos','Frutas y Verduras','Panaderia y Reposteria','Carnes','Limpieza',
                    'Medicinas','Comida Preparada','Licores']
  drinks: string[] = ['Coca-Cola','Te Frio','Seven-Up'];
  prices: number[] = [1500,1000,2000];

  images: string[] = ['https://i.pinimg.com/originals/c9/22/09/c9220944ff4b526ff69c26af0227f51f.png','https://images-na.ssl-images-amazon.com/images/I/81FfpLMWNfL._SL1500_.jpg'
  ,'https://sarascr.com/image/cache/catalog/SARAS/Productos/1Categorias/3huevoslacteos-600x600.png'
]
  dataReturned: any;

  constructor(public modalController: ModalController) {
  }

  ngOnInit(){
    for (let index = 0; index < 10; index++) {

      const randomImage = Math.floor(Math.random()*3);
      const randomDrink = Math.floor(Math.random()*3);
      const randomPrice = Math.floor(Math.random()*3);
      
      this.Categories.push({Name:this.names[index],Image:this.images[randomImage]});

      this.Items.push({Name:this.drinks[randomDrink],Image:this.images[randomImage],Type:'Bebida',Price:this.prices[randomPrice],Count:0});
      this.Bebidas.push({Name:this.drinks[randomDrink],Image:this.images[randomImage],Price:this.prices[randomPrice],Type:'Bebida',Count:0});
  
    }
    console.log(this.Categories);
    console.log(this.Bebidas);
  }


 


  async openModal(category:Category) {

    this.itemsToUse = []

    if(category.Name === 'Bebidas'){

      this.Type = 'Bebidas';
      this.Bebidas.forEach(bebida => {
        this.itemsToUse.push(bebida);
      });

    }
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "items": this.itemsToUse,
        "Title": this.Type
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  

}
