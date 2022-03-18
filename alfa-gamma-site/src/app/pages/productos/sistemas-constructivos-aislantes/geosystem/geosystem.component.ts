import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-geosystem',
  templateUrl: './geosystem.component.html',
  styleUrls: ['./geosystem.component.scss']
})
export class GeosystemComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/geosystem/geosystem.png",
      thumbnailImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/geosystem/geosystem.png",
      alt: "geosystem",
      title: "geosystem"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
