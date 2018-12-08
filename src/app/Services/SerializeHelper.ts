import { Type } from '@angular/compiler';
export class SerializeHelper {

  public static deserializeCollection<T>(fileName: string): T[] {
    return this.deserialize<T[]>(fileName);
  }

  public static deserialize<T>(fileName: string): T {
    const fs = require('fs');
    const fileContent = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(fileContent) as T;
  }
}
