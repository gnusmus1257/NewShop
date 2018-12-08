import { ProductService } from './../../../Services/ProductService';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/Models/Product/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;
  public columns;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product = this.productService.get(params['id']);
      if (this.product.specifications) {
        this.columns = this.product.specifications.map(x => x.name);
      }
    });
  }

  addClick() {

  }

  buyClick() {

  }

}
