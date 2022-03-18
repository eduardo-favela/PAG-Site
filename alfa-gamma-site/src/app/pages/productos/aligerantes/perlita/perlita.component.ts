import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-perlita',
  templateUrl: './perlita.component.html',
  styleUrls: ['./perlita.component.scss']
})
export class PerlitaComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aligerantes/perlita/perlite.png",
      thumbnailImageSrc: "../../../assets/images/productos/aligerantes/perlita/perlite.png",
      alt: "Perlite",
      title: "Perlite"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
