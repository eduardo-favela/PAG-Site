import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import API_URI from './API_URI'
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  geocoder: any;

  constructor(private http: HttpClient) { }

  private data = new BehaviorSubject({});
  data$ = this.data.asObservable();

  changeData(data: any) {
    this.data.next(data)
  }

  getUens() {
    return this.http.get(`${API_URI}/ubicacion/getUens`)
  }

  getUensSelect() {
    return this.http.get(`${API_URI}/ubicacion/getUensSelect`)
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve(resp.coords);
      },
        err => {
          resolve(false)
        });
    });
  }

  /* geocode(latLng: google.maps.LatLng): Observable<google.maps.GeocoderResult[]> {
    this.geocoder = new google.maps.Geocoder();
    return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
      // Invokes geocode method of Google Maps API geocoding.
      this.geocoder.geocode({ location: latLng }, (
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            console.log('Geocoding service: geocoder failed due to: ' + status);
            observer.error(status);
          }
        })
      );
    });
  } */

  getWppNumber(ubicacion) {
    return this.http.post(`${API_URI}/ubicacion/getWppNumber`, ubicacion)
  }
}
