import { Component } from '@angular/core';
import { RoleService } from './services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvoCourse';
  constructor(public roleService: RoleService) {}
  changeRole(role: 'admin' | 'user') {
    this.roleService.changeRole(role);
  }
}
