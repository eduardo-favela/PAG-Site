import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-amvic',
  templateUrl: './amvic.component.html',
  styleUrls: ['./amvic.component.scss']
})
export class AmvicComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/amvic/amvic.png",
      thumbnailImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/amvic/amvic.png",
      alt: "amvic",
      title: "amvic"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
