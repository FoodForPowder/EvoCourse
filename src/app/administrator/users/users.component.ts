import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ShortUser, User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: ShortUser[] = [];
  constructor(
    private userService: UsersService,
    private toasrts: ToastrService
  ) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.toasrts.success('Успешно');
      },
      error: () => this.toasrts.error('Попробуйте позже', 'Произошла ошибка'),
    });
  }
  deleteUser(id: string) {
    if (
      confirm(
        'Вы действительно хотите удалить этот рецепт? Это действие нельзя отменить.'
      )
    ) {
      this.userService.deleteUserById(id).subscribe({
        next: (data) => {
          this.toasrts.success('Успешно');
          this.users = this.users.filter((value) => value.id !== id);
        },
        error: () => this.toasrts.error('Попробуйте позже', 'Произошла ошибка'),
      });
    }
  }
}
