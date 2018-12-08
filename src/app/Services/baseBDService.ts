import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export abstract class BaseBDService<T> {

  public onAddElement = new EventEmitter<boolean>();
  public elements: T[];
  public tableName: string;

  constructor(protected db: AngularFireDatabase) {
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

  private getAll() {
    const service = this;
    const elements = [];
    this.db.database.ref(this.tableName).once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        elements.push(childSnapshot.val());
      });
      service.elements = elements;
    });
  }
}
