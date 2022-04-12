import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import API_URI from './API_URI'

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${API_URI}/blog/getPosts`)
  }

  getPost(idPost) {
    return this.http.post(`${API_URI}/blog/getPost`, idPost)
  }
}
