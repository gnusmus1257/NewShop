export class SerializeHelper {

  public static deserializeCollection<T>(fileName: string): T[] {
    return this.deserialize<T[]>(fileName);
  }

  public static deserialize<T>(fileName: string): T {
    // const jsonfile = require('jsonfile');
    const fileContent = ''; // jsonfile.readFile(fileName);
    return JSON.parse(fileContent) as T;
  }
}
