import { Injectable } from "@angular/core";
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  getLoggedUser(): User | null {
    const raw = localStorage.getItem('user');
    if (raw) {
      return JSON.parse(raw) as User;
    } else {
      return null;
    }
  }

  setLoggedUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearLoggedUser(): void {
    localStorage.removeItem('user');
  }

}
