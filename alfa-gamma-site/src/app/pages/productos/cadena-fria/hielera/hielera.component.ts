import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-hielera',
  templateUrl: './hielera.component.html',
  styleUrls: ['./hielera.component.scss']
})
export class HieleraComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/cadena-fria/hielera/Hielera.png",
      thumbnailImageSrc: "../../../assets/images/productos/cadena-fria/hielera/Hielera.png",
      alt: "Hielera",
      title: "Hielera"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
