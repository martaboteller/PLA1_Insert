import { Injectable } from '@angular/core';
import { IUser, rankExtension } from '../interfaces/interfaces';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UsersService) {}

  login(email: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const user = this.userService.getUserByEmail(email);
      if (user && user.admin) {
        this.setSession(user);
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  setSession(user: IUser): void {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    //JSON.stringify converts an object (i.e. array) to text
  }

  closeSession(): void {
    localStorage.removeItem('loggedUser');
  }

  hasSession(): boolean {
    console.log(localStorage.getItem('loggedUser'));
    return !!localStorage.getItem('loggedUser');
  }

  getUserSession(): IUser {
    const user: IUser = JSON.parse(localStorage.getItem('loggedUser'));
    return user;
  }
}
