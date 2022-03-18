import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-r-shield',
  templateUrl: './r-shield.component.html',
  styleUrls: ['./r-shield.component.scss']
})
export class RShieldComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aislantes/r-shield/rShield.png",
      thumbnailImageSrc: "../../../assets/images/productos/aislantes/r-shield/rShield.png",
      alt: "rShield",
      title: "rShield"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
