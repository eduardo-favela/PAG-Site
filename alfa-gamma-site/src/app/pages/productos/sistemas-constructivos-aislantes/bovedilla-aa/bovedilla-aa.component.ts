import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bovedilla-aa',
  templateUrl: './bovedilla-aa.component.html',
  styleUrls: ['./bovedilla-aa.component.scss']
})
export class BovedillaAaComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/bovedilla-aa/bovedillaAlmaAbierta.png",
      thumbnailImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/bovedilla-aa/bovedillaAlmaAbierta.png",
      alt: "bovedillaAlmaAbierta",
      title: "bovedillaAlmaAbierta"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
