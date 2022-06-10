import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: any = [];
  loading: boolean = true;
  loadingPage = true;


  constructor(private blogService: BlogService, private _sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    this.loadingPage = false;
  }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(
      res => {
        this.posts = res
        this.posts.forEach(post => {
          post.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + post.imagen);
        });
        this.loading = false;
      },
      err => console.error(err)
    )

    /* $(window).on('load', () => {
      this.loadingPage = false;
    }) */
  }
}
