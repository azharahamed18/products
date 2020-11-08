import { ProductService } from './../productsservice/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { response } from 'express';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  constructor(private _productservice:ProductService) { }
 @ViewChild('userForm') userForm:NgForm;
dataTitle = "Product list"
products=[

];
  ngOnInit(): void {
  }
  onAddprodrct(id,title,Category,Description,Price,Image){
   this.products.push({
     id:id.value,
     title:title.value,
     Category:Category.value,
     Description:Description.value,
     Price:Price.value,
     Image:Image.value
   })
   
   
  }
  onDeleteproduct(id){
    if(confirm('Do you want to delete this item?'))
    this.products.splice(id,1)
  }
  onSaveProduct(){
    this._productservice.saveProducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
  }
  onFetchProduct(){

  }
  onAddUser(userData){
    console.log(userData.title)
  }
}
