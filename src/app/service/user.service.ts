import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUserByCardNo(cardNo: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${cardNo}`);
  }

  getUserByUsername(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?username=${username}`);
  }

}
