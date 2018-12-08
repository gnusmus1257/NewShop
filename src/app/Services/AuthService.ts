import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../Models/User';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {

  public OnLoginEvent = new EventEmitter<boolean>();
  public OnRegisterEvent = new EventEmitter<boolean>();
  public OnLogOutEvent = new EventEmitter<boolean>();

  private user: User;
  private users: User[];

  constructor(private db: AngularFireDatabase) {
    const service = this;
    const commentsRef = this.db.database.ref('/users');
    commentsRef.on('child_added', function (data) {
      service.getAllUsers();
    });

    commentsRef.on('child_changed', function (data) {
      service.getAllUsers();
    });

    commentsRef.on('child_removed', function (data) {
      service.getAllUsers();
    });
    this.getAllUsers();
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
    if (!this.isContainUser(user.username)) {
      this.db.list<User>('/users').push(user);
      this.OnRegisterEvent.emit(true);
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    return this.user;
  }

  public isContainUser(username: string): boolean {
    return this.findUser(username) !== undefined;
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

  private getAllUsers() {
    const service = this;
    const users = [];
    this.db.database.ref('/users').once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        users.push(childSnapshot.val());
      });
      service.users = users;
    });
  }

  private findUser(username: string): User {
    return this.users.find(x => x.username === username);
  }
}
