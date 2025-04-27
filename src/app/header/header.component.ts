import { Component } from '@angular/core';
import { Roles } from '../enums/roles.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  role: Roles = Roles.User;
  isAuthorized(): boolean {
    return this.role !== Roles.Guest;
  }
  isAdmin(): boolean {
    return this.role === Roles.Admin;
  }
}
