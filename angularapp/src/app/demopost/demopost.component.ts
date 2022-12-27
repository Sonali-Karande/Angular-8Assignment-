import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  arrPosts: Posts[] = [];
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPostsss().subscribe(res => {
      console.log('jsonplaceholder', res);
      this.arrPosts = res;
      console.log('array data', this.arrPosts);

    })

  }

}
