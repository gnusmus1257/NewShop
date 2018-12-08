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
  public isReady: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isReady = false;
    this.productService.isReadyList.subscribe(() => {
      this.route.params.subscribe(params => {
        this.product = this.productService.get(params.id);
        console.log(this.productService);
        if (this.product.specifications) {
          this.columns = this.product.specifications.map(x => x.name);
        }
        this.isReady = true;
      });
    });
  }

  addClick() {

  }

  buyClick() {

  }

}
