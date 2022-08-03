import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() getPositionDialog = new EventEmitter<string>();

  ngOnInit(): void { }

  getPosition() {
    this.getPositionDialog.emit();
  }
}
