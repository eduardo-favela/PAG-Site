import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'INICIO',
        routerLink: '/',
        styleClass: 'menuitem',
      },
      {
        label: 'PRODUCTOS',
        styleClass: 'menuitem',
        items: [
          {
            label: 'Aligerantes',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Casetón',
                styleClass: 'menuitem',
                routerLink: '/aligerantes/caseton'
              },
              {
                label: 'Perlita',
                styleClass: 'menuitem',
                routerLink: '/aligerantes/perlita'
              },
              {
                label: 'Insertos de block',
                styleClass: 'menuitem',
                routerLink: '/aligerantes/insertos-block'
              }
            ]
          },
          {
            label: 'Aislantes',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Climate',
                styleClass: 'menuitem',
                routerLink: '/aislantes/climate'
              },
              {
                label: 'Cubo integrado',
                styleClass: 'menuitem',
                routerLink: '/aislantes/cubo-integrado'
              },
              {
                label: 'Media Caña',
                styleClass: 'menuitem',
                routerLink: '/aislantes/media-cana'
              }
            ]
          },
          {
            label: 'Aplicación especial',
            styleClass: 'menuitem',
            items: [
              {
                label: 'MOLDEO',
                styleClass: 'menuitem',
              },
              {
                label: 'AGRICULTURA',
                styleClass: 'menuitem',
              }
            ]
          },
          {
            label: 'Sistemas Constructivos y Aislantes',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Panel',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/panel'
              },
              {
                label: 'Bovedilla envolvente',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/bovedilla-e'
              },
              {
                label: 'AMVIC',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/amvic'
              },
              {
                label: 'Bovedilla alma abierta',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/bovedilla-aa'
              },
              {
                label: 'Geosystem',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/geosystem'
              },
            ]
          },
          {
            label: 'Decorativos',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Plafón',
                styleClass: 'menuitem',
                routerLink: '/decorativos/plafon'
              },
              {
                label: 'Molduras',
                styleClass: 'menuitem',
                routerLink: '/decorativos/molduras'
              }
            ]
          },
          {
            label: 'Cadena Fría',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Hielera',
                styleClass: 'menuitem',
                routerLink: '/cadena-fria/hielera'
              }
            ]
          }
        ]
      },
      {
        label: 'MATERIALES',
        styleClass: 'menuitem',
        items: [
          {
            label: 'EPS',
            styleClass: 'menuitem',

          },
          {
            label: 'EPP',
            styleClass: 'menuitem',

          },
          {
            label: 'ARCEL',
            styleClass: 'menuitem',
          }
        ]
      },
      {
        label: 'BENEFICIOS',
        styleClass: 'menuitem',
        routerLink: '/'
      },
      {
        label: 'UBICACIÓN',
        styleClass: 'menuitem',
        routerLink: '/ubicacion-contacto'
      },
      {
        label: 'CONTACTO',
        styleClass: 'menuitem',
        routerLink: '/contacto'
      },
      {
        label: 'BLOG',
        styleClass: 'menuitem',
        routerLink: '/blog'
      }
    ];
  }
}
