import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { GetPostService } from './getPosts.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private getPost: GetPostService) {}

  ngOnInit() {
    this.posts = this.getPost.getAll();
  }
}
