import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery'

import { ContactoService } from '../../services/contacto.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {


  infoSoli: any = [
    {
      field: 'Seleccione un tipo de información...',
      id: 0,
      disabled: true
    }
  ];
  productos: any = [
    {
      field: 'Seleccione un producto...',
      id: 0,
      disabled: true
    }
  ];
  sucursales: any = [
    {
      field: 'Seleccione una sucursal...',
      id: 0,
      disabled: true
    }
  ];
  estados: any = [
    {
      field: 'Seleccione un estado...',
      id: 0,
      disabled: true
    }
  ];
  ciudades: any = [
    {
      field: 'Seleccione una ciudad...',
      id: 0,
      disabled: true
    }
  ];
  unidadesMedida: any = [
    {
      field: 'Seleccione una unidad de medida...',
      id: 0,
      disabled: true
    }
  ]

  unidadesMedidaRes: any = null;

  loading: boolean = false;

  selectsInfores: any

  ciudadesRes: any

  contactSavedId: any

  displayPosition: boolean

  displayDialogError: boolean

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
    comentarios: null,
    empresa: null,
    uMedida: null
  }

  constructor(private recaptchaV3Service: ReCaptchaV3Service, private contactoService: ContactoService) { }

  public send(form: NgForm): void {
    this.loading = true;
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token: string) => {
        /* console.log(this.contacto) */
        if (!this.contacto.infoSolicitada) {
          $('#infoSoliSelect').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.productoSelected) {
          $('#productoSelect').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.cantidad) {
          $('#cantidadInput').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.nombre) {
          $('#inputNombre').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.apellidos) {
          $('#inputApellidos').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.telefono) {
          $('#notelefono').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.email) {
          $('#inputEmail').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.sucursal) {
          $('#selectSucursal').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.estado) {
          $('#selectEstado').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.ciudad) {
          $('#selectCiudad').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.direccion) {
          $('#textDireccion').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.comentarios) {
          $('#textComentarios').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.empresa) {
          $('#inputEmpresa').addClass('ng-invalid ng-dirty')
        }
        if (!this.contacto.uMedida) {
          $('#uMedidaSelect').addClass('ng-invalid ng-dirty')
        }

        this.saveContact(token)
      });
  }

  ngOnInit(): void {
    this.getSelectsInfo()
  }

  getSelectsInfo() {
    this.contactoService.getSelectsInfo().subscribe(
      res => {
        this.selectsInfores = res
        this.productos.push(...this.selectsInfores.productos)
        this.infoSoli.push(...this.selectsInfores.infosolicitada)
        this.sucursales.push(...this.selectsInfores.sucursales)
        this.estados.push(...this.selectsInfores.estados)
      },
      err => console.error(err)
    )
  }

  getUnidadesMedida() {
    this.contactoService.getUnidadesMedida({ producto: this.contacto.productoSelected }).subscribe(
      res => {
        this.unidadesMedidaRes = res
        this.unidadesMedida = []
        this.unidadesMedida.push({
          field: 'Seleccione una unidad de medida...',
          id: 0,
          disabled: true
        })
        this.unidadesMedida.push(...this.unidadesMedidaRes)
      },
      err => console.error(err)
    )
  }

  saveContact(token) {
    if (this.contacto.infoSolicitada && this.contacto.productoSelected && this.contacto.cantidad && this.contacto.nombre && this.contacto.apellidos && this.contacto.telefono && this.contacto.email && this.contacto.sucursal && this.contacto.estado && this.contacto.ciudad && this.contacto.direccion && this.contacto.comentarios && this.contacto.empresa && this.contacto.uMedida) {
      if (this.contacto.email.includes('@')) {
        if (this.contacto.telefono.toString().length == 10) {
          this.contactoService.guardarContacto(this.contacto).subscribe(
            res => {
              this.contactSavedId = res
              this.sendContact(token)
            },
            err => console.error(err)
          )
        }
        else {
          this.loading = false;
          $('#notelefono').addClass('ng-invalid ng-dirty')
          this.displayDialogError = true
        }
      }
      else {
        this.loading = false;
        $('#inputEmail').addClass('ng-invalid ng-dirty')
        this.displayDialogError = true
      }
    }
    else {
      this.loading = false;
      this.displayDialogError = true
    }
  }

  sendContact(token) {
    this.contactoService.enviarContacto({ token: token, contactId: this.contactSavedId.insertId }).subscribe(
      res => {
        if (res) {
          this.contacto.infoSolicitada = null;
          this.contacto.productoSelected = null;
          this.contacto.cantidad = null;
          this.contacto.nombre = null;
          this.contacto.apellidos = null;
          this.contacto.telefono = null;
          this.contacto.email = null;
          this.contacto.sucursal = null;
          this.contacto.estado = null;
          this.contacto.ciudad = null;
          this.contacto.direccion = null;
          this.contacto.comentarios = null;
          this.contacto.empresa = null;
          this.contacto.uMedida = null;
          this.unidadesMedida = []
          this.unidadesMedida.push({
            field: 'Seleccione una unidad de medida...',
            id: 0,
            disabled: true
          })

          this.loading = false;
          this.displayPosition = true;
        }
      },
      err => console.error(err)
    )
  }

  estadoSelected() {
    if (this.contacto.estado) {
      $('#selectEstado').removeClass('ng-invalid ng-dirty')
      this.contactoService.getCiudades({ estadoid: this.contacto.estado }).subscribe(
        res => {
          this.ciudadesRes = res
          this.ciudades = [
            {
              field: 'Seleccione una ciudad...',
              id: 0,
              disabled: true
            }
          ]
          this.contacto.ciudad = null
          this.ciudades.push(...this.ciudadesRes)
        }
      )
    }
  }

  infoSelected() {
    if (this.contacto.infoSolicitada) {
      $('#infoSoliSelect').removeClass('ng-invalid ng-dirty')
    }
  }

  productoSelected() {
    if (this.contacto.productoSelected) {
      $('#productoSelect').removeClass('ng-invalid ng-dirty')
      this.getUnidadesMedida()
    }
  }

  uMedidaSelect() {
    if (this.contacto.uMedidaSelect) {
      $('#uMedidaSelect').removeClass('ng-invalid ng-dirty')
    }
  }

  cantidadInput() {
    if (this.contacto.cantidad) {
      $('#cantidadInput').removeClass('ng-invalid ng-dirty')
    }
  }

  nombreInput() {
    if (this.contacto.nombre) {
      $('#inputNombre').removeClass('ng-invalid ng-dirty')
    }
  }

  apellidosInput() {
    if (this.contacto.apellidos) {
      $('#inputApellidos').removeClass('ng-invalid ng-dirty')
    }
  }

  telefonoInput() {
    if (this.contacto.telefono) {
      $('#notelefono').removeClass('ng-invalid ng-dirty')
    }
  }

  emailInput() {
    if (this.contacto.email) {
      $('#inputEmail').removeClass('ng-invalid ng-dirty')
    }
  }

  sucursalSelected() {
    if (this.contacto.sucursal) {
      $('#selectSucursal').removeClass('ng-invalid ng-dirty')
    }
  }

  ciudadSelected() {
    if (this.contacto.ciudad) {
      $('#selectCiudad').removeClass('ng-invalid ng-dirty')
    }
  }

  direccionInput() {
    if (this.contacto.direccion) {
      $('#textDireccion').removeClass('ng-invalid ng-dirty')
    }
  }

  comentariosInput() {
    if (this.contacto.comentarios) {
      $('#textComentarios').removeClass('ng-invalid ng-dirty')
    }
  }

  empresaInput() {
    if (this.contacto.empresa) {
      $('#inputEmpresa').removeClass('ng-invalid ng-dirty')
    }
  }
}
