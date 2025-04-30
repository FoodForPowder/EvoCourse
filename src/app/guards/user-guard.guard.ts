import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/auth-store.service';
import { User } from '../models/user';
import { Roles } from '../enums/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
  user!: User;
  constructor(private authStore: UserStoreService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authStore.authState$.subscribe({
      next: (data) => (this.user = data),
    });
    return (
      this.user.role !== Roles.Guest ||
      this.router.navigateByUrl('/access-denied')
    );
  }
}
