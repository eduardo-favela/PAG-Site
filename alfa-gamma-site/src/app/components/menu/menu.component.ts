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
                label:'Alfaterm',
                styleClass:'menuitem',
                routerLink:'/aislantes/alfaterm'
              },
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
            label: 'Sistemas Constructivos y Aislantes',
            styleClass: 'menuitem',
            items: [
              {
                label: 'AMVIC',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/amvic'
              },
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
                label: 'Bovedilla alma abierta',
                styleClass: 'menuitem',
                routerLink: '/sistemas-constructivos-aislantes/bovedilla-aa'
              },
              {
                label:'Bovedilla aperaltada',
                styleClass:'menuitem',
                routerLink:'/sistemas-constructivos-aislantes/bovedilla-a'
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
            label: 'Industria',
            styleClass: 'menuitem'
            /* label: 'Aplicación especial',
            styleClass: 'menuitem',
            items: [
              {
                label: 'Agricultura',
                styleClass: 'menuitem',
                routerLink: '/aplicacion-especial/agricultura'
              },
              {
                label: 'Moldeo',
                styleClass: 'menuitem',
                routerLink: '/aplicacion-especial/moldeo'
              },
            ] */
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
          },
        ]
      },
      {
        label: 'MATERIALES',
        styleClass: 'menuitem',
        items: [
          {
            label: 'EPS',
            styleClass: 'menuitem',
            routerLink: '/eps'
          },
          {
            label: 'EPP',
            styleClass: 'menuitem',
            routerLink: '/epp'
          },
          {
            label: 'ARCEL',
            styleClass: 'menuitem',
            routerLink: '/arcel'
          }
        ]
      },
      {
        label: 'BENEFICIOS',
        styleClass: 'menuitem',
        routerLink: '/beneficios'
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
