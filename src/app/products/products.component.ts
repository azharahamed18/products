import { PRODUCTS } from './../mock-product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products=PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
