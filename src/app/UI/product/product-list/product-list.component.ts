import { Component, OnInit } from '@angular/core';
import { Product } from './../../../Models/Product/Product';
import { ProductService } from './../../../Services/ProductService';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public Products: Product[];
  public IsReady: boolean;

  constructor(private productService: ProductService) {
    // code...
  }

  ngOnInit() {
    this.IsReady = false;

    this.productService.isReadyList.subscribe(() => {
      this.Products = this.productService.elements;
      this.IsReady = true;
    });
  }
}
