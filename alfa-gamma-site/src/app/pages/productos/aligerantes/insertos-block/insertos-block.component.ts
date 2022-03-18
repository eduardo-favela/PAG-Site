import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-insertos-block',
  templateUrl: './insertos-block.component.html',
  styleUrls: ['./insertos-block.component.scss']
})
export class InsertosBlockComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aligerantes/insertos-block/insertosBlock.png",
      thumbnailImageSrc: "../../../assets/images/productos/aligerantes/insertos-block/insertosBlock.png",
      alt: "InsertosBlock",
      title: "InsertosBlock"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
