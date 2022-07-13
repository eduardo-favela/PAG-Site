import { Component } from '@angular/core';
import { UbicacionService } from './services/ubicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alfa-gamma-site';

  responseuen = null

  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit(): void {
    this.ubicacionService.getPosition().then(pos => {
      if (pos) {
        let Latlng = new google.maps.LatLng(parseFloat(pos.latitude), parseFloat(pos.longitude));
        this.ubicacionService.geocode(Latlng).subscribe(add => {
          let objestado = add.find(obj => obj.types.includes('administrative_area_level_1'))
          let objciudad = add.find(obj => obj.types.includes('administrative_area_level_2'))
          let estado = objestado.formatted_address.split(',')[0]
          let ciudad = objciudad.formatted_address.split(',')[0]
          estado = estado.replace(/^\s+|\s+$/g, '')
          ciudad = ciudad.replace(/^\s+|\s+$/g, '')
          this.ubicacionService.getWppNumber({ estado: estado, ciudad: ciudad }).subscribe(
            res => {
              this.responseuen = res
              this.ubicacionService.changeData({ wppnumber: `521${this.responseuen[0].telefono.toString()}`, estado: estado, ciudad: ciudad })
            },
            err => {
              console.error(err)
            }
          )
        })
      }
      else {
        /* alert('Para poder brindarle una atención más personalizada, es necesario conocer su ubicación') */
      }
    });
  }
}
