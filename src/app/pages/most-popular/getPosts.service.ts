import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';

@Injectable()
export class GetPostService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('/api/posts');
  }
}
