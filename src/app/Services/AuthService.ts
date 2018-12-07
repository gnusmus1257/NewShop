import { SerializeHelper } from './SerializeHelper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Observable } from 'rxjs';
import { Constants } from '../Models/Constants';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  public isLoginValid(user: User): boolean {
    const dbUser = this._findUser(user.username);
    return dbUser != null && dbUser.password === user.password;
  }

  private _findUser(username: string): User {
    const users = this._getAllUsers();
    return users.find(x => x.username === username);
  }

  private _getAllUsers(): User[] {
    return SerializeHelper.deserializeCollection<User>(Constants.usersDb);
  }
}
