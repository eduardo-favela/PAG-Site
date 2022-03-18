import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-molduras',
  templateUrl: './molduras.component.html',
  styleUrls: ['./molduras.component.scss']
})
export class MoldurasComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/decorativos/molduras/molduras.png",
      thumbnailImageSrc: "../../../assets/images/productos/decorativos/molduras/molduras.png",
      alt: "molduras",
      title: "molduras"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
