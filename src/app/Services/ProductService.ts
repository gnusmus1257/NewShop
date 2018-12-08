import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../Models/Product/Product';
import { BaseBDService } from './baseBDService';

@Injectable()
export class ProductService extends BaseBDService<Product> {

  constructor(protected db: AngularFireDatabase) {
    super(db);
    this.tableName = '/products';
  }

  public get(id: number): Product {
    return this.elements.find(x => x.id === id);
  }
}
