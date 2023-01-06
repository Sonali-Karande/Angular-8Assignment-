import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SonaliproductService } from '../services/sonaliproduct.service';

@Component({
  selector: 'app-managepro',
  templateUrl: './managepro.component.html',
  styleUrls: ['./managepro.component.css']
})
export class ManageproComponent implements OnInit {
dataTitle1='Products';
dataTitle=this._sonaliProducts.fecthDataTitle();
fecthing=false;
editMode=false;
editIndex:number;
Products=[
  {
    id:1,
    name:'Laptop',
    price:40000
  },
  {
    id:2,
    name:'tv',
    price:40000
  },
  {
    id:3,
    name:'tablet',
    price:40000
  }
];
onAddProduct(id,name,price){
  if (this.editMode) {
    console.log(this.Products[this.editIndex]);
    
    this.Products[this.editIndex]={
      id:id.value,
      name:name.value,
      price:price.value
    }
    this.editMode=false;
    this.id.nativeElement.value='';
    this.name.nativeElement.value='';
    this.price.nativeElement.value='';
  }
  else{
  this.Products.push({
    id:id.value,
    name:name.value,
    price:price.value
  })
}
this.onSaveProduct();

}

onDeleteProduct(id){
  if(confirm('Do you want to  delete this product?')){
    this.Products.splice(id,1)
//this._sonaliProducts.deleteProduct().subscribe();
this.onSaveProduct();
  }
}

@ViewChild('id', { static: false }) id: ElementRef;
@ViewChild('name', { static: false }) name: ElementRef;
@ViewChild('price', { static: false }) price: ElementRef;
//@ViewChild('id') id:ElementRef;
// @ViewChild('name') name:ElementRef;
// @ViewChild('price') price:ElementRef;

onEditProduct(index:number){
  this.editMode=true;
  this.editIndex=index;
  console.log(this.Products[index]);
  console.log(this.Products[index].id);
  this.id.nativeElement.value=this.Products[index].id;
  this.name.nativeElement.value=this.Products[index].name;
  this.price.nativeElement.value=this.Products[index].price;
  
}
  constructor(private _sonaliProducts:SonaliproductService) { }

ngOnInit() {
    this.onFetchProduct();
  }
  onSaveProduct(){
    this._sonaliProducts.saveProducts(this.Products).subscribe(res=>{
      console.log('Products',res);
      
    })
 }
  onFetchProduct(){
    this.fecthing=true;
    this._sonaliProducts.fecthProducts().subscribe(res=>{
      console.log('fetched product',res);
     // this.Products=res;
      const data=JSON.stringify(res);
      console.log(data)
      this.Products=JSON.parse(data);
    this.fecthing=false;
      
    },(err=>{console.log(err);
    }))
  }
}
