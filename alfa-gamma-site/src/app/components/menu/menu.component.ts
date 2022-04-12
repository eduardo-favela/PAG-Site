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
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'PRODUCTOS',
        icon: 'pi pi-fw pi-tag',
        items: [
          {
            label: 'Aligerantes',
            items: [
              {
                label: 'Casetón',
                routerLink: '/aligerantes/caseton'
              },
              {
                label: 'Perlita',
                routerLink: '/aligerantes/perlita'
              },
              {
                label: 'Insertos de block',
                routerLink: '/aligerantes/insertos-block'
              }
            ]
          },
          {
            label: 'Aislantes',
            items: [
              {
                label: 'R-SHIELD',
                routerLink: '/aislantes/r-shield'
              },
              {
                label: 'Cubo integrado',
                routerLink: '/aislantes/cubo-integrado'
              },
              {
                label: 'Media Caña',
                routerLink: '/aislantes/media-cana'
              }
            ]
          },
          {
            label: 'Sistemas Constructivos y Aislantes',
            items: [
              {
                label: 'Panel',
                routerLink: '/sistemas-constructivos-aislantes/panel'
              },
              {
                label: 'Bovedilla envolvente',
                routerLink: '/sistemas-constructivos-aislantes/bovedilla-e'
              },
              {
                label: 'AMVIC',
                routerLink: '/sistemas-constructivos-aislantes/amvic'
              },
              {
                label: 'Bovedilla alma abierta',
                routerLink: '/sistemas-constructivos-aislantes/bovedilla-aa'
              },
              {
                label: 'Geosystem',
                routerLink: '/sistemas-constructivos-aislantes/geosystem'
              },
            ]
          },
          {
            label: 'Decorativos',
            items: [
              {
                label: 'Plafón',
                routerLink: '/decorativos/plafon'
              },
              {
                label: 'Molduras',
                routerLink: '/decorativos/molduras'
              }
            ]
          },
          {
            label: 'Cadena Fría',
            items: [
              {
                label: 'Hielera',
                routerLink: '/cadena-fria/hielera'
              },
              {
                label: 'Alfabox'
              }
            ]
          }

        ]
      },
      {
        label: 'MATERIALES',
        icon: 'pi pi-fw pi-box',
        items: [
          {
            label: 'EPS',

          },
          {
            label: 'EPP',

          },
          {
            label: 'ARCEL',
          }
        ]
      },
      {
        label: 'UBICACIÓN',
        icon: 'pi pi-fw pi-map-marker',
        routerLink: '/ubicacion-contacto'
      },
      {
        label: 'CONTACTO',
        icon: 'pi pi-envelope',
        routerLink: '/contacto'
      },
      {
        label: 'BLOG',
        icon: 'pi pi-book',
        routerLink: '/blog'
      }
    ];
  }
}
