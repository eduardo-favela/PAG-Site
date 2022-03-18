import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-cubo-integrado',
  templateUrl: './cubo-integrado.component.html',
  styleUrls: ['./cubo-integrado.component.scss']
})
export class CuboIntegradoComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aislantes/cubo-integrado/cuboIntegrado.png",
      thumbnailImageSrc: "../../../assets/images/productos/aislantes/cubo-integrado/cuboIntegrado.png",
      alt: "cuboIntegrado",
      title: "cuboIntegrado"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
