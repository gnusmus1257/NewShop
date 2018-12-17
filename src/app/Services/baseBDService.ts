import { Observable } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable()
export abstract class BaseBDService<T> {

  public isReadyList = new EventEmitter<boolean>();
  public onAddElement = new EventEmitter<boolean>();
  public elements: T[];
  public refElements: Observable<T[]>;
  public tableName: string;

  constructor(protected db: AngularFireDatabase, tableName) {
    this.tableName = tableName;
    const service = this;
    const commentsRef = this.db.database.ref(service.tableName);
    commentsRef.on('child_added', function (data) {
      service.getAll();
    });

    commentsRef.on('child_changed', function (data) {
      service.getAll();
    });

    commentsRef.on('child_removed', function (data) {
      service.getAll();
    });
    this.getAll();
  }

  public add(element: T): boolean {
    if (!this.isContain(element)) {
      this.db.list<T>(this.tableName).push(element);
      this.onAddElement.emit(true);
      return true;
    } else {
      return false;
    }
  }

  public isContain(element: T): boolean {
    return this.elements.find(x => x === element) !== undefined;
  }

  public getAll() {
    this.refElements = this.db.list<T>(this.tableName).valueChanges();
    this.refElements.subscribe(list => {
      this.elements = list;
      console.log(this.elements);
      this.isReadyList.emit(true);
    });
  }
}
