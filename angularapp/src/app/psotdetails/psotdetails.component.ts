import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-psotdetails',
  templateUrl: './psotdetails.component.html',
  styleUrls: ['./psotdetails.component.css']
})
export class PsotdetailsComponent implements OnInit {

  constructor(private _postService:PostService,private route:ActivatedRoute) { }
arrPost:any[]=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this._postService.getPostById(id).subscribe(res=>{
      console.log('get post by id',res);
      this.arrPost.push(res);
      console.log('array',this.arrPost);
      
    })
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
