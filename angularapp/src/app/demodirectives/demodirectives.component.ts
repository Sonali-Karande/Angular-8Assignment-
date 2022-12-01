import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
isShow:boolean=true;
title:string="top 3movies";
movies:Movie[]=[
  {title:`3 idiot`,director:`Chetan bhagat`,cast:`amir`,realeaseDate:`2012`},
  {title:`RHTM`,director:`raj`,cast:`Madhavn`,realeaseDate:`2012`},
  {title:`Andaj apana apna`,director:`Bhansali`,cast:`amir and salman`,realeaseDate:`2012`}



]
@Input() myinputMsg:string;
@Input()employee:any;

  constructor() { }

  ngOnInit() {
    console.log(`From Parent` ,this.myinputMsg);
    
  }

}
