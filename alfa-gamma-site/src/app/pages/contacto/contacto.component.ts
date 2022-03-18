import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  infoSoli: any = [
    {
      name: 'Seleccione un tipo de información...',
      disabled: true
    }
  ];
  productos: any = [
    {
      name: 'Seleccione un producto...',
      disabled: true
    }
  ];

  sucursales: any = [
    {
      name: 'Seleccione una sucursal...',
      disabled: true
    }
  ];

  estados: any = [
    {
      name: 'Seleccione un estado...',
      disabled: true
    }
  ];

  ciudades: any = [
    {
      name: 'Seleccione una ciudad...',
      disabled: true
    }
  ];

  contacto: any = {
    infoSolicitada: null,
    productoSelected: null,
    cantidad: null,
    nombre: null,
    apellidos: null,
    telefono: null,
    email: null,
    sucursal: null,
    estado: null,
    ciudad: null,
    direccion: null,
    comentarios: null
  }

  constructor(private recaptchaV3Service: ReCaptchaV3Service) { }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.log(`Token [${token}] generated`);
    });
  }

  ngOnInit(): void {
  }

}
