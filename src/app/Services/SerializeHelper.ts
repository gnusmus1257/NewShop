import { Type } from '@angular/compiler';

export class SerializeHelper {

  private static fs = require('fs');

  public static deserializeCollection<T>(fileName: string): T[] {
    return this.deserialize<T[]>(fileName);
  }

  public static deserialize<T>(fileName: string): T {
    const fileContent = SerializeHelper.fs.readFileSync(fileName, 'utf8');
    return JSON.parse(fileContent) as T;
  }
}
