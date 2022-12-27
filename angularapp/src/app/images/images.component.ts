import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  imgU1="https://unsplash.com/photos/cYyqhdbJ9TI";
  constructor() { }
  imgUrl="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
 
  ngOnInit() {
  }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
