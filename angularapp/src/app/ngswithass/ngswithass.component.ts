import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswithass',
  templateUrl: './ngswithass.component.html',
  styleUrls: ['./ngswithass.component.css']
})
export class NgswithassComponent implements OnInit {
  selectedLanguage:string;
  getProductValue(value) {
    console.log(value.target.value);
    this.selectedLanguage = value.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
