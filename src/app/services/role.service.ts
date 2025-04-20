import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private role: 'user' | 'admin' = 'user';
  constructor() {}
  changeRole(role: 'user' | 'admin') {
    return (this.role = role);
  }
  getRole() {
    return this.role;
  }
  isAdmin() {
    return this.role === 'admin';
  }
}
