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
      previewImageSrc: "../../../assets/images/carousel/bannerInicio.jpg",
      alt: "Construcción",
      title: "Construcción",
    },
    {
      previewImageSrc: "../../../assets/images/carousel/industria.jpg",
      alt: "Industria",
      title: "Industria",
    },
  ]

  @ViewChild('galleria') galleria: Galleria;

  responsiveOptions: any[] = [
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
  }
}
