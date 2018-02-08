import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetPostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Post[]>('/api/posts');
  }
}
