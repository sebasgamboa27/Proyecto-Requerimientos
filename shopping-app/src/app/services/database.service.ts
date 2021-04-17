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


async sp_selectSucursal() {
    return await this.http.get<JSON[]>('http://localhost:3000/sp_selectSucursal').toPromise();
  }
async enviarSucursal(id:number) {
    return await this.http.post<JSON[]>('http://localhost:3000/seleccionarSucursal',{sucursal:id}).toPromise();
  }


  async sp_selectCategoria() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectCategoria').toPromise();
  }


  async sp_InsertArticulo(nombre: string,descripcion: string,precio: number,cantidad: number,categoriaId: number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertArticulo',{nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,

    categoriaId:categoriaId}).toPromise();
  }

  async sp_selectArticulo() {
    return await this.http.get<any[]>('http://localhost:3000/getArticulos').toPromise();
  }

  async getArticulo(id) {
    return await this.http.post<JSON>('http://localhost:3000/sp_selectArticulo',{id:id}).toPromise();
  }

  
  async getArticuloXcategoria(cate) {
    return await this.http.post<JSON>('http://localhost:3000/getArticulosCategoria',{categoria:cate}).toPromise();
  }

  async sp_deleteArticulo(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteArticulo',{id:id}).toPromise();
  }

  async sp_updateArticulo(nombre: string,descripcion: string,precio: number,cantidad: number,categoriaId: number,sucursalId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_updateArticulo',{nombre:nombre,descripcion:descripcion,precio:precio,cantidad:cantidad,

    categoriaId:categoriaId,sucursalId:sucursalId}).toPromise();
  }
async sp_InsertUsuario(nombre: string,apellido: string,contraseña: string,correo: string,direccionFisica:string,nombreUsuario:string,

    cedula:number,tipoId:number) {

    return await this.http.post<any[]>('http://localhost:3000/sp_InsertUsuario',{nombre:nombre,apellido:apellido,contraseña:contraseña,correo:correo,

    direccionFisica:direccionFisica,nombreUsuario:nombreUsuario,cedula:cedula,tipoId:tipoId}).toPromise();
  }

  async sp_selectUsuario(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_selectUsuario',{id:id}).toPromise();
  }

  async sp_deleteUsuario(id:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_deleteUsuario',{id:id}).toPromise();
  }

  async sp_updateUsuario(id:number, nombre: string,apellido: string,contraseña: string,correo: string,categoriaId: number,direccionFisica:string,nombreUsuario:string,

    cedula:number,tipoId:number) {

    return await this.http.post<any[]>('http://localhost:3000/sp_updateUsuario',{id:id,nombre:nombre,apellido:apellido,contraseña:contraseña,correo:correo,

    categoriaId:categoriaId,direccionFisica:direccionFisica,nombreUsuario:nombreUsuario,cedula:cedula,tipoId:tipoId}).toPromise();
  }

  async getAllUsuarios() {
    return await this.http.get<any[]>('http://localhost:3000/getAllUsuarios').toPromise();
  }

  async getLoginUser(nombre:string,contrasena:string) {
    return await this.http.post<any[]>('http://localhost:3000/getLoginUser',{nombreUsuario:nombre,contrasena:contrasena}).toPromise();
  }


  async sp_InsertPedido(estado: string,fecha:string,precioTotal:number,usuarioId:number) {
    return await this.http.post<any[]>('http://localhost:3000/sp_InsertPedido',{estado:estado,fecha:fecha,precioTotal:precioTotal,usuarioId:usuarioId}).toPromise();
  }

  async sp_selectPedido() {
    return await this.http.get<any[]>('http://localhost:3000/sp_selectPedidos').toPromise();
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
