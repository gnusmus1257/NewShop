import { ImageSlider } from './../../../Models/Product/ImageSlider';
import { ProductService } from './../../../Services/ProductService';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Constants } from 'src/app/Models/Constants';
import { DefaultErrorStateMatcher } from '../../ValidatorsHelpers/defaultErrorStateMatcher';
import { Product } from 'src/app/Models/Product/Product';
import { Specification } from 'src/app/Models/Product/Specification';

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
  public specificationName = '';
  public specificationValue = '';
  public smallImageUrl = '';
  public bigImageUrl = '';

  private formBuilder = new FormBuilder();

  constructor(private productService: ProductService) { }

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

  addSpecification() {
    const specification = new Specification(this.specificationName, this.specificationValue);
    this.specificationName = '';
    this.specificationValue = '';
    this.product.specifications.push(specification);
  }

  removeSpecification(specification: Specification) {
    this.product.specifications = this.product.specifications.filter(x => x !== specification);
  }

  addImage() {
    const image = new ImageSlider(this.bigImageUrl, this.smallImageUrl);
    this.bigImageUrl = '';
    this.smallImageUrl = '';
    this.product.imagesLinks.push(image);
  }

  removeImage(image: ImageSlider) {
    this.product.imagesLinks = this.product.imagesLinks.filter(x => x !== image);
  }
}
