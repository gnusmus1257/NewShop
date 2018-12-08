import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../Models/User';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseBDService } from './baseBDService';

@Injectable()
export class AuthService extends BaseBDService<User> {

  public OnLoginEvent = new EventEmitter<boolean>();
  public OnRegisterEvent = new EventEmitter<boolean>();
  public OnLogOutEvent = new EventEmitter<boolean>();

  private user: User;

  constructor(protected db: AngularFireDatabase) {
    super(db);
    this.tableName = '/users';
  }

  public login(user: User): boolean {
    if (this.isLoginValid(user)) {
      this.user = user;
      this.OnLoginEvent.emit(true);
      return true;
    } else {
      return false;
    }
  }

  public register(user: User): boolean {
    if (!this.isContain(user)) {
      this.db.list<User>(this.tableName).push(user);
      this.OnRegisterEvent.emit(true);
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    return this.user;
  }

  public isLogged(): boolean {
    return this.user ? true : false;
  }

  public isLoginValid(user: User): boolean {
    const dbUser = this.findUser(user.username);
    return dbUser != null && dbUser.password === user.password;
  }

  public LogOut() {
    this.user = null;
    this.OnLogOutEvent.emit(true);
  }

  private findUser(username: string): User {
    return this.elements.find(x => x.username === username);
  }
}
