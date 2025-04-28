import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../models/auth';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  authForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
    ]),
    isFastJwt: new FormControl(false),
  });

  auth: Auth = {
    username: '',
    password: '',
  };
  isFastJwt: boolean = false;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private title: Title
  ) {
    this.title.setTitle('Авторизация');
  }
  submit() {
    if (this.authForm.valid) {
      this.auth.username = this.authForm.get('login')?.value;
      this.auth.password = this.authForm.get('password')?.value;
      this.isFastJwt = this.authForm.get('isFastJwt')?.value;
      this.authService.login(this.auth, this.isFastJwt).subscribe({
        next: () => {
          this.toastr.success('Успешно');
        },
        error: (error) => {
          if (error.status === 401) {
            this.toastr.error('Неправильный пароль');
            return;
          }
          this.toastr.error('Попробуйте позже', 'Произошла ошибка');
        },
      });
    }
  }
}
