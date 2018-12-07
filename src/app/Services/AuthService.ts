import { SerializeHelper } from './SerializeHelper';
import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { Constants } from '../Models/Constants';

@Injectable()
export class AuthService {

  public user: User;

  constructor() { }

  public login(user: User): boolean {
    if (this.isLoginValid(user)) {
      this.user = user;
      return true;
    } else {
      return false;
    }
  }

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
