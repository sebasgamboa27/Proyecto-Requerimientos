import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  //Ejemplo de llamada al API

  async getAllItems() {
    return await this.http.get<any[]>('http://localhost:3000/getAllItems').toPromise();
  }
}
