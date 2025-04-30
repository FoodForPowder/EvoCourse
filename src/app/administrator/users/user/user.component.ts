import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FullUser } from 'src/app/models/user';
import { UsersService } from '../../../services/users.service';
import { throwError, switchMap, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user!: FullUser;
  userSub$!: Subscription;

  constructor(
    private activatedRouter: ActivatedRoute,
    private UsersService: UsersService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub$ = this.activatedRouter.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');
          if (!id) {
            return throwError(() => new Error('Id empty'));
          }
          return this.UsersService.getUserById(id);
        })
      )
      .subscribe({
        next: (data) => {
          this.toastr.success('Успешно');
          this.user = data;
        },
        error: () => {
          this.toastr.error('Попробуйте позже', 'Произошла ошибка');
        },
      });
  }
  deleteUser() {
    this.UsersService.deleteUserById(this.user.id).subscribe({
      next: () => {
        this.toastr.success('Успешно');
        this.router.navigate(['/admin/users']);
      },
      error: () => {
        this.toastr.error('Попробуйте позже', 'Произошла ошибка');
      },
    });
  }
}
