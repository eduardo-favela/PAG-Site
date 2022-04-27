import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-ubicacion-contacto',
  templateUrl: './ubicacion-contacto.component.html',
  styleUrls: ['./ubicacion-contacto.component.scss']
})
export class UbicacionContactoComponent implements OnInit {

  uens: any = []
  activeState : boolean[] = [];

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit(): void {
    $('a[href=""]').click(function (event) {
      event.preventDefault();
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1YXJkby1mYXZlbGEiLCJhIjoiY2wwc2g3aW9oMDE4ejNkbXVjbXhhMWV5cSJ9.WfpsqFlg4SN8KF0Jh3eOyw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-103.4440524556212, 25.607399884006373], // starting position [lng, lat]
      zoom: 4 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    this.getUens(map)
  }

  getUens(map) {
    this.ubicacionService.getUens().subscribe(
      res => {
        this.uens = res
        this.addMarkers(map)
      },
      err => {
        console.error(err)
      }
    )
  }

  addMarkers(map) {
    this.uens.forEach((element, index) => {
      let mark = document.createElement('div');
      mark.className = 'marker';

      switch (element.tipos_uen) {
        case 1:
          mark.style.backgroundImage ='url(../../../assets/images/map-icons/planta.png)'
          break;
        case 2:
          mark.style.backgroundImage ='url(../../../assets/images/map-icons/oficinacd.png)'
          break;
        case 3:
          mark.style.backgroundImage ='url(../../../assets/images/map-icons/oficinav.png)'
          break;
        default:
          break;
      }
      /* mark.style.backgroundImage = (()?('url(../../../assets/images/map-icons/planta.png)'):('')); */
      mark.style.width = '28px';
      mark.style.height = '28px';
      mark.style.borderRadius = '50%';
      mark.onclick = () => {this.listener(index)};
      this.activeState.push(false);
      new mapboxgl.Marker(mark).setLngLat([element.longitud, element.latitud])
        .setPopup(new mapboxgl.Popup().setHTML(`<h6>Sucursal ${element.nombre_uen}</h6>`))
        .addTo(map);
    });
  }

  listener(index) {
    this.activeState[index]= !this.activeState[index];
  }
}
