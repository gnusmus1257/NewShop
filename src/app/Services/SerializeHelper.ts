import { Type } from '@angular/compiler';
//import { readFileSync } from 'fs';

export class SerializeHelper {

  //private static fs = require('fs');

  //private static fs = window['require']('fs');

  public static deserializeCollection<T>(fileName: string): T[] {
    return this.deserialize<T[]>(fileName);
  }

  public static deserialize<T>(fileName: string): T {
    const fileContent = ''; // readFileSync(fileName, 'utf8');
    return JSON.parse(fileContent) as T;
  }
}
