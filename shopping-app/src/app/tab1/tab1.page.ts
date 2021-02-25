import { Component } from '@angular/core';
import { Category } from '../Interfaces/Category';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  Categories: Category[] = [];

  names: string[] = ['Bebidas','Snacks','Lacteos y Huevos','Frutas y Verduras','Panaderia y Reposteria','Carnes','Limpieza',
                    'Medicinas','Comida Preparada','Licores']

  images: string[] = ['https://i.pinimg.com/originals/c9/22/09/c9220944ff4b526ff69c26af0227f51f.png','https://images-na.ssl-images-amazon.com/images/I/81FfpLMWNfL._SL1500_.jpg'
  
]

  constructor() {
  }

  ngOnInit(){
    for (let index = 0; index < 10; index++) {
      
      this.Categories.push({Name:this.names[index],Image:this.images[0]});
  
    }
    console.log(this.Categories);
  }

}
