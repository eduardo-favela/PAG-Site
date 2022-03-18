import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-caseton',
  templateUrl: './caseton.component.html',
  styleUrls: ['./caseton.component.scss']
})
export class CasetonComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aligerantes/caseton/caseton.png",
      thumbnailImageSrc: "../../../assets/images/productos/aligerantes/casteon/caseton.png",
      alt: "Caseton",
      title: "Caseton"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
