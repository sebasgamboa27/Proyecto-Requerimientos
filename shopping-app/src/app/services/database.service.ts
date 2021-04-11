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


  async sp_InsertSucursal(nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertSucursal',{nombre:nombre}).toPromise();
  }

  async sp_selectSucursal() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectSucursal').toPromise();
  }

  async sp_deleteSucursal(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteSucursal',{id:id}).toPromise();
  }

  async updateSucursal(nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/updateSucursal',{nombre:nombre}).toPromise();
  }



  async sp_InsertCategoria(nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertCategoria',{nombre:nombre}).toPromise();
  }

  async sp_selectCategoria() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectCategoria').toPromise();
  }

  async sp_deleteCategoria(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteCategoria',{id:id}).toPromise();
  }

  async updateCategoria(id:number,nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/updateCategoria',{nombre:nombre,id:id}).toPromise();
  }


  async sp_InsertArticulo(nombre: string,descripcion: string,precio: number,cantidad: number,categoriaId: number,sucursalId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertArticulo',{nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,

    categoriaId:categoriaId,sucursalId:sucursalId}).toPromise();
  }

  async sp_selectArticulo() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectArticulo').toPromise();
  }

  async sp_deleteArticulo(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteArticulo',{id:id}).toPromise();
  }

  async sp_updateArticulo(nombre: string,descripcion: string,precio: number,cantidad: number,categoriaId: number,sucursalId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_updateArticulo',{nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,

    categoriaId:categoriaId,sucursalId:sucursalId}).toPromise();
  }


  async sp_InsertTipoUsuario(nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertTipoUsuario',{nombre:nombre}).toPromise();
  }

  async sp_selectTipoUsuario() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectTipoUsuario').toPromise();
  }

  async sp_deleteTipoUsuario(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteCategoria',{id:id}).toPromise();
  }

  async updateTipoUsuario(id:number,nombre: string) {
    return await this.http.post<any[]>('http://localhost:3000/updateTipoUsuario',{nombre:nombre,id:id}).toPromise();
  }



  async sp_InsertUsuario(id:number, nombre: string,apellido: string,contraseña: string,correo: string,categoriaId: number,direccionFisica:string,nombreUsuario:string,

    cedula:number,tipoId:number) {

    return await this.http.post<any[]>('http://localhost:3000/sp_InsertUsuario',{id:id,nombre:nombre,apellido:apellido,contraseña:contraseña,correo:correo,

    categoriaId:categoriaId,direccionFisica:direccionFisica,nombreUsuario:nombreUsuario,cedula:cedula,tipoId:tipoId}).toPromise();
  }

  async sp_selectUsuario() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectUsuario').toPromise();
  }

  async sp_deleteUsuario(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteUsuario',{id:id}).toPromise();
  }

  async sp_updateUsuario(id:number, nombre: string,apellido: string,contraseña: string,correo: string,categoriaId: number,direccionFisica:string,nombreUsuario:string,

    cedula:number,tipoId:number) {

    return await this.http.post<any[]>('http://localhost:3000/sp_updateUsuario',{id:id,nombre:nombre,apellido:apellido,contraseña:contraseña,correo:correo,

    categoriaId:categoriaId,direccionFisica:direccionFisica,nombreUsuario:nombreUsuario,cedula:cedula,tipoId:tipoId}).toPromise();
  }




  async sp_InsertPedido(estado: string,fecha:string,precioTotal:number,usuarioId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertPedido',{estado:estado,fecha:fecha,precioTotal:precioTotal,usuarioId:usuarioId}).toPromise();
  }

  async sp_selectPedido() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectPedido').toPromise();
  }

  async sp_deletePedido(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deletePedido',{id:id}).toPromise();
  }

  async sp_updatePedido(estado: string,fecha:string,precioTotal:number,usuarioId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_updatePedido',{estado:estado,fecha:fecha,precioTotal:precioTotal,usuarioId:usuarioId}).toPromise();
  }


  async sp_InsertArticuloXPedido(pedidoId: number,ArticuloId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertArticuloXPedido',{pedidoId:pedidoId,ArticuloId:ArticuloId}).toPromise();
  }

  async sp_selectArticuloXPedido() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectArticuloXPedido').toPromise();
  }

  async sp_deleteArticuloXPedido(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteArticuloXPedido',{id:id}).toPromise();
  }

}
