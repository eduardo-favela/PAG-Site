import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-media-cana',
  templateUrl: './media-cana.component.html',
  styleUrls: ['./media-cana.component.scss']
})
export class MediaCanaComponent implements OnInit {

  images: any[] = [
    {
      previewImageSrc: "../../../assets/images/productos/aislantes/media-cana/mediaCana.png",
      thumbnailImageSrc: "../../../assets/images/productos/aislantes/media-cana/mediaCana.png",
      alt: "MediaCana",
      title: "MediaCana"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    $('a[href=""]').click(function(event) {
      event.preventDefault();
    });
  }
}
