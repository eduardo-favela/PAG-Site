import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UbicacionService } from '../../services/ubicacion.service';

@Component({
  selector: 'app-ubicacion-contacto',
  templateUrl: './ubicacion-contacto.component.html',
  styleUrls: ['./ubicacion-contacto.component.scss']
})
export class UbicacionContactoComponent implements OnInit {

  uens: any = []
  activeState: boolean[] = [];

  mapOptions: any = {
    zoom: 5,
    lng: -103.4440524556212,
    lat: 25.607399884006373,
  }

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit(): void {
    $('a[href=""]').click(function (event) {
      event.preventDefault();
    });

    /* new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    }); */

    /*     mapboxgl.accessToken = 'pk.eyJ1IjoiZWR1YXJkby1mYXZlbGEiLCJhIjoiY2wwc2g3aW9oMDE4ejNkbXVjbXhhMWV5cSJ9.WfpsqFlg4SN8KF0Jh3eOyw';
        const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [-103.4440524556212, 25.607399884006373], // starting position [lng, lat]
          zoom: 4 // starting zoom
        });
        map.addControl(new mapboxgl.NavigationControl()); */
    this.getUens()
  }

  getUens() {
    this.ubicacionService.getUens().subscribe(
      res => {
        this.uens = res
        this.uens.forEach((element, index) => {

          switch (element.tipos_uen) {
            case 1:
              element.icon = '../../../assets/images/ubicacion/oycd.png'
              break;
            case 2:
              element.icon = '../../../assets/images/ubicacion/planta.png'
              break;
            case 3:
              element.icon = '../../../assets/images/ubicacion/ov.png'
              break;
            default:
              break;
          }
          element.index = index
          this.activeState.push(false)
        });
      },
      err => {
        console.error(err)
      }
    )
  }

  markerClickListener(e) {

    for (let i = 0; i < this.activeState.length; i++) {
      if(e.index != i){
        this.activeState[i] = false;
      }
    }
    this.activeState[e.index] = !this.activeState[e.index]
  }

  addMarkers(map) {
    /* let mark = document.createElement('div');
    mark.className = 'marker';

    switch (element.tipos_uen) {
      case 1:
        mark.style.backgroundImage = 'url(../../../assets/images/ubicacion/oycd.png)'
        mark.style.width = '32px';
        mark.style.height = '22px';
        break;
      case 2:
        mark.style.backgroundImage = 'url(../../../assets/images/ubicacion/planta.png)'
        mark.style.width = '25px';
        mark.style.height = '28px';
        break;
      case 3:
        mark.style.backgroundImage = 'url(../../../assets/images/ubicacion/ov.png)'
        mark.style.width = '25px';
        mark.style.height = '28px';
        break;
      default:
        break;
    }
    mark.onclick = () => { this.listener(index) };
    this.activeState.push(false);
    new mapboxgl.Marker(mark).setLngLat([element.longitud, element.latitud])
      .setPopup(new mapboxgl.Popup().setHTML(`<h6>Sucursal ${element.nombre_uen}</h6>`))
      .addTo(map);
  });*/
  }

  /* listener(index) {
    this.activeState[index] = !this.activeState[index];
  } */
}
