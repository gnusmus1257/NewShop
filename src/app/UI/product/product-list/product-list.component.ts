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
  }

  ngOnInit() {
    this.IsReady = false;
    this.search = '';

    const options = environment.algolia;
    this.search = instantsearch(options);
    // search box widget
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'Search for actors',
        poweredBy: true
      })
    );

    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          empty: 'No results',
          item: `<img src=https://image.tmdb.org/t/p/w300{{image_path}} width="50px">
                <strong>Result {{objectID}}</strong>:
                {{{_highlightResult.name.value}}}`
        },
        escapeHits: true
      })
    );  

    this.productService.getElements().subscribe(res => {
      this.Products = res;
      this.IsReady = true;
    });
    this.search.start();
  }

  onSearchChange() {
    this.search.start();
  }
}
