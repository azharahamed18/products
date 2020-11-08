import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './../mock-product';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products=PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
