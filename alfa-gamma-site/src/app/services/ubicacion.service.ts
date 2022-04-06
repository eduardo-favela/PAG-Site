import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import API_URI from './API_URI'

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http : HttpClient) { }

  getUens(){
    return this.http.get(`${API_URI}/ubicacion/getUens`)
  }
}
