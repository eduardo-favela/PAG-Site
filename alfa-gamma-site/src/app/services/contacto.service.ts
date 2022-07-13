import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import API_URI from './API_URI'

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http : HttpClient) { }

  getSelectsInfo(){
    return this.http.get(`${API_URI}/contacto/getSelectInfo`)
  }

  getCiudades(estado){
    return this.http.post(`${API_URI}/contacto/getCiudades`,estado)
  }

  enviarContacto(contacto){
    return this.http.post(`${API_URI}/contacto/enviarCorreo`,contacto)
  }

  getUnidadesMedida(producto){
    return this.http.post(`${API_URI}/contacto/getUnidadesMedida`,producto)
  }

  guardarContacto(contacto){
    return this.http.post(`${API_URI}/contacto/guardarContacto`,contacto)
  }

  guardarContactoWpp(contacto){
    return this.http.post(`${API_URI}/contacto/guardarContactoWpp`,contacto)
  }
}
