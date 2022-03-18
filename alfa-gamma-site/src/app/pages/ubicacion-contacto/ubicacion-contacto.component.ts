import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
  selector: 'app-ubicacion-contacto',
  templateUrl: './ubicacion-contacto.component.html',
  styleUrls: ['./ubicacion-contacto.component.scss']
})
export class UbicacionContactoComponent implements OnInit {


  products : any = [
    {
      name:'Laguna',
    }
  ]
  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function (event) {
      event.preventDefault();
    });
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1YXJkby1mYXZlbGEiLCJhIjoiY2wwc2g3aW9oMDE4ejNkbXVjbXhhMWV5cSJ9.WfpsqFlg4SN8KF0Jh3eOyw';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-103.4440524556212,25.607399884006373], // starting position [lng, lat]
    zoom: 4 // starting zoom
    });
    map.addControl(new mapboxgl.NavigationControl());
    const marker = new mapboxgl.Marker({
      color: "#d22d35",
      draggable: false
      }).setLngLat([-103.4440524556212,25.607399884006373])
      .setPopup(new mapboxgl.Popup().setHTML("<h6>Sucursal Laguna</h6>"))
      .addTo(map);
  }
}
