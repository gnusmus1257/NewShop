import { ProductService } from './../../../Services/ProductService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Constants } from 'src/app/Models/Constants';
import { DefaultErrorStateMatcher } from '../../ValidatorsHelpers/DefaultErrorStateMatcher';
import { Product } from 'src/app/Models/Product/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public addProductForm: FormGroup;
  public product: Product;
  public matcher;
  public constants = Constants;

  private formBuilder = new FormBuilder();

  constructor(private productService: ProductService) { }

  /*
            id: number;
            title: string;
            category: Category;
            price: number;
            description: string;
            shortDescription: string;
            specifications: Specification[];
            reviewers: Review[];
            comments: Comment[];
            imageUrl: string;
  */

  ngOnInit() {
    this.product = new Product();
    this.addProductForm = this.formBuilder.group({
      title: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]],
      category: ['', [
        Validators.required,
        Validators.minLength(Constants.minValidationLength),
        Validators.maxLength(Constants.maxValidationLength)
      ]],
      price: ['', [
        Validators.required,
        Validators.min(0)
      ]],
      description: ['', [
        Validators.required,
      ]],
      shortDescription: ['', [
        Validators.required,
        Validators.maxLength(Constants.maxShortDescriptionLength)
      ]],
      imageUrl: ['', [
        Validators.required
      ]]
    });
    this.matcher = new DefaultErrorStateMatcher();
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      const isAdded = this.productService.add(this.product);
      console.log(isAdded);
    }
  }

}
