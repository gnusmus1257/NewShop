export class User {
  public username: string;
  public password: string;

  constructor(userName: string, password: string) {
    this.username = userName;
    this.password = password;
  }
}

export class EntityUsers {
  users: UserElement[];
}

export class UserElement {
  user: User;
}
