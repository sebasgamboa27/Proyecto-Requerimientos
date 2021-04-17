import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(base:DatabaseService) { }
  
  ngOnInit() {
  }

}
