import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clild-ngonchanges',
  templateUrl: './clild-ngonchanges.component.html',
  styleUrls: ['./clild-ngonchanges.component.css']
})
export class ClildNgonchangesComponent implements OnInit {
@Input() childPosts:any[];




  constructor() {
    console.log("ChildNgonchangesComponent constructor called");
   }

  ngOnInit() {
    console.log("ChildNgonchangesComponent ngOnInit called")
  }
  ngOnChanges(changes: SimpleChanges): void {
  
    console.log("ChildNgonchangesComponent ngOnChanges called");
    for (const propname in changes) {
      const prop = changes[propname];

      const {previousValue, currentValue, firstChange} = prop;

      console.log(`Prop name ${propname}`);
      console.log(`Prev  value ${previousValue}`);
      console.log(`Current value ${currentValue}`);
      console.log(`First change ${firstChange}`);
      console.log("---------------")

    }
    
  }

}
