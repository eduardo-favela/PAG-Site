import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/panel/panel.png",
      thumbnailImageSrc: "../../../assets/images/productos/sistemas-constructivos-aislantes/panel/panel.png",
      alt: "Panel",
      title: "Panel"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
