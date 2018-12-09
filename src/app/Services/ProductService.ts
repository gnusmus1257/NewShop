import { Constants } from './../Models/Constants';
import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../Models/Product/Product';
import { BaseBDService } from './baseBDService';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of, from } from 'rxjs';

@Injectable()
export class ProductService extends BaseBDService<Product> {

  constructor(protected db: AngularFireDatabase) {
    super(db, Constants.productsTableName);
  }

  public async get(id: string): Promise<Product> {
    const element = await this.getElements().toPromise().then(res => res);
    return element ? element.find(x => x.id.toString() === id) : null;
  }

  public add(element: Product): boolean {
    if (!this.isContain(element)) {
      element.id = this.getNewId();
      this.db.list<Product>(this.tableName).push(element);
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
