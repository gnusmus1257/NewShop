import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Product } from './../../../Models/Product/Product';
import * as instantsearch from 'instantsearch.js'
import { ProductService } from './../../../Services/ProductService';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public Products: Product[];
  public IsReady: boolean;
  public search: any;

  constructor(private productService: ProductService) {
    // code...
  }

  ngOnInit() {
    this.IsReady = false;

    this.productService.isReadyList.subscribe(() => {
      this.Products = this.productService.elements;
      this.IsReady = true;
    });
    this.search.start();
  }

  onSearchChange() {
    this.search.start();
  }
}
