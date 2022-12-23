import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesassign',
  templateUrl: './pipesassign.component.html',
  styleUrls: ['./pipesassign.component.css']
})
export class PipesassignComponent implements OnInit {

  empArr: any[] = [
    {
      no: 1,
      name: 'Sonali',

      salary: '7000 Rs',
      gender:'Female',

      city: 'Pune'
    },
    {
      no: 2,
      name: 'Yogesh',
      salary: '7000 Rs',
      gender:'Male',
      city: 'Mumbai'
    },
    {
      no: 3,
      name: 'Mayuresh',
      salary: '72000 Rs',
      gender:'Male',

      city: 'Available'
    },
    {
      no: 4,
      name: 'Arjun',
      salary: '17000 Rs',
      gender:'Male',

      city: 'Nagpur'
    },
    {
      no: 5,
      name: 'Nandini',
      salary: '73000 Rs',
      gender:'Female',

      city: 'Baramati'
    },
    {
      no: 6,
      name: 'Kavya',
      salary: '67000 Rs',
      gender:'Female',

      city: 'Nanded'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
