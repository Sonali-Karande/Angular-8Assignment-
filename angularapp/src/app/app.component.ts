import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { Product } from './models/product';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uName:string='i am from parent component dfgbhnjm,';
  public uid:number;
  title = 'angularapp';
  // empInfo:Employee=new Employee();
  empObject=[]; //array
EmployeeRecords:any[]=[{eName:"Sonali",eDept:"HR"},
                      {eName:"Arjun",eDept:"Manager"},];

  constructor(private _demoService: DemoService,private _postService:PostService) {
    this.empObject.push({ id:111,name:'Sonali',salary:90000,age:32,gender:'Female'});
    this.empObject.push({ id:122,name:'Swati',salary:80000,age:31,gender:'Female'});
    this.empObject.push({ id:133,name:'Yogesh',salary:60000,age:35,gender:'Male'});
    this.empObject.push({ id:144,name:'Vedika',salary:87000,age:30,gender:'Female'});
    this.empObject.push({ id:155,name:'Mayuresh',salary:60000,age:20,gender:'Male'});
}
data : string = 'red';

  name: string;
  price: number;
   product: Product = new Product();

appChildExist:boolean=true;
destroy()
{
  this.appChildExist=false;
}
  handleData(value) {
    this.data = value.target.value;
  }
  
  UpdateProduct(){
    //this.product=new Product;
    this.product.name=this.name;
    this.product.price=this.price;
  }

  
userData:any=[];
  ngOnInit(): void {
      this._demoService.getUsersData().subscribe(data => {
        console.log('getting data from api', data)
        this.userData=data;     
      })
      this._demoService.getDataPosts().subscribe(result=>{
        console.log('getting posts',result);
        
      })
    }
    DeletePost()
    {
      this._postService.deletePostById(1).subscribe(res=>{
        console.log(res);
        
      })
    }

}
