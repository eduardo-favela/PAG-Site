import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Galleria } from 'primeng/galleria';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: MenuItem[];

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/carousel/construccion.jpg",
      thumbnailImageSrc: "../../../assets/images/carousel/construccion.jpg",
      alt: "Construcción",
      title: "Construcción"
    },
    {
        previewImageSrc: "../../../assets/images/carousel/industria.jpg",
        thumbnailImageSrc: "../../../assets/images/carousel/industria.jpg",
        alt: "Industria",
        title: "Industria"
    },
  ]

  @ViewChild('galleria') galleria: Galleria;

  /////////////Configuracion del boton flotante de las redes sociales/////////////
  floatbtnoptions = {
    type : "quarter-circle",
    direction: "down-left",
  }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      }
  ];

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
          icon: 'pi pi-facebook',
          command: ()=>{
            window.open('https://www.facebook.com/AlfaGammaMx/','_blank')
          },
      },
      {
          icon: 'pi pi-instagram',
          command: ()=>{
            window.open('https://www.instagram.com/alfagammapoliestireno/','_blank')
          }
      },
      {
          icon: 'pi pi-whatsapp',
          command: ()=>{
            window.open('https://wa.me/5218711891421?text=Hola,%20quisiera%20recibir%20informacion','_blank')
          }
      },
    ]
  }
}

/* target: '_blank',
          url: 'https://www.facebook.com/AlfaGammaMx/' */
