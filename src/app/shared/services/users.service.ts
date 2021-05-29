import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersArray: IUser[] = [
    {
      idUser: 1,
      name: 'UserA',
      surname: 'SurnameA',
      email: 'a@a.com',
      admin: true,
    },
    {
      idUser: 2,
      name: 'UserB',
      surname: 'SurnameB',
      email: 'b@b.com',
      admin: true,
    },
    {
      idUser: 3,
      name: 'UserC',
      surname: 'SurnameC',
      email: 'c@c.com',
      admin: true,
    },
  ];

  constructor() {}

  public getUsers() {
    return this.usersArray;
  }

  public getUsersById(idUser: number): IUser {
    return this.usersArray.filter((user) => user.idUser === +idUser)[0];
  }

  public getUserByEmail(email: string): IUser {
    return this.usersArray.filter((user) => user.email === email)[0];
  }
}
