import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../Interfaces/Category';
import { Item } from '../Interfaces/Item';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  cate=[]
  Categories: Category[] = [];
  categoria=""
  productos=[]

  constructor(public modalController: ModalController,private database: DatabaseService) {
  }

  async ngOnInit(){



    this.cate=await this.database.sp_selectCategoria()
    ///this.productos=await this.database.sp_selectArticulo()
    console.log(this.cate);
    console.log(this.productos);
  }



  

}
