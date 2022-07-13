import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../services/ubicacion.service';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-wpp-floating',
  templateUrl: './wpp-floating.component.html',
  styleUrls: ['./wpp-floating.component.scss']
})
export class WppFloatingComponent implements OnInit {

  number = null

  constructor(private ubicacionService: UbicacionService, private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.ubicacionService.data$.subscribe(
      res => {
        this.number = res
      }
    )
  }

  goToWpp() {
    if (this.number.hasOwnProperty('wppnumber')) {
      this.contactoService.guardarContactoWpp({ estado: this.number.estado, ciudad: this.number.ciudad }).subscribe(
        res => {
          if (res) {
            window.open(`https://wa.me/${this.number.wppnumber}?text=Hola,%20quisiera%20recibir%20informacion`, '_blank')
          }
        },
        err => {
          console.error(err)
        }
      )
    }
    else {
      alert('Para poder brindarle una atención más personalizada, es necesario conocer su ubicación')
    }
  }
}
