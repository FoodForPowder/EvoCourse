import { UserStoreService } from './../services/auth-store.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Roles } from '../enums/roles.enum';
import { User } from '../models/user';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user!: User;
  private subscription!: Subscription;

  constructor(
    private storeService: UserStoreService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.storeService.authState$.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isAuthorized(): boolean {
    return this.user.role !== Roles.Guest;
  }

  isAdmin(): boolean {
    return this.user.role === Roles.Admin;
  }
  logout() {
    this.authService.logout();
  }
}
