import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../Models/Product/Product';
import { BaseBDService } from './baseBDService';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class ProductService extends BaseBDService<Product> {

  tableName = 'products';

  constructor(protected db: AngularFireDatabase) {
    super(db);

  }

  public get(id: number): Product {
    return this.elements.find(x => x.id === id);
  }

  public add(element: Product): boolean {
    if (!this.isContain(element)) {
      element.id = this.getNewId();
      this.db.list<Product>('/' + this.tableName).push(element);
      this.onAddElement.emit(true);
      return true;
    } else {
      return false;
    }
  }

  private getNewId(): number {
    return Math.max.apply(Math, this.elements.map(x => x.id)) + 1;
  }
}
