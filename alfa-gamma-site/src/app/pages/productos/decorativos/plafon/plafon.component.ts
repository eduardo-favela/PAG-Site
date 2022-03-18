import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-plafon',
  templateUrl: './plafon.component.html',
  styleUrls: ['./plafon.component.scss']
})
export class PlafonComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/decorativos/plafon/plafon.png",
      thumbnailImageSrc: "../../../assets/images/productos/decorativos/plafon/plafon.png",
      alt: "plafon",
      title: "plafon"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
