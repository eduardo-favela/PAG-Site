import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bovedilla-e',
  templateUrl: './bovedilla-e.component.html',
  styleUrls: ['./bovedilla-e.component.scss']
})
export class BovedillaEComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/bovedilla-e/bovedillaEnvolvente.png",
      thumbnailImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/bovedilla-e/bovedillaEnvolvente.png",
      alt: "bovedillaEnvolvente",
      title: "bovedillaEnvolvente"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
