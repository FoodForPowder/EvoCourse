import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { FullUser, ShortUser, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiUrl = environment.baseApi;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<ShortUser[]>(`${this.apiUrl}/users`);
  }
  getUserById(id: string) {
    return this.http.get<FullUser>(`${this.apiUrl}/users/${id}`);
  }
  deleteUserById(id: string) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
  editUser(id: string, user: ShortUser) {
    return this.http.patch(`${this.apiUrl}/users/${id}`, user);
  }
}
