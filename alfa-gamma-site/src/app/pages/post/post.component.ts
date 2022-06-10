import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private blogService: BlogService, private _sanitizer: DomSanitizer) { }

  idPost: any = null
  post: any = {
    id_post: null,
    titulo: null,
    contenido: null,
    imagen: null,
    fecha: null
  }
  loading = true;

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('idPost')
    this.getPost()
  }

  ngAfterViewInit() {
    this.loading=false;
  }

  getPost() {
    this.blogService.getPost({ id: this.idPost }).subscribe(
      res => {
        this.post = res
        this.post.imagen = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.post.imagen);
      },
      err => console.error(err)
    )
  }
}
