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
  }

  ngOnInit() {
    this.IsReady = false;
    this.productService.getElements().subscribe(res => {
      this.Products = res;
      this.IsReady = true;
    });
  }
}
