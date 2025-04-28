import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Registration } from '../models/registration';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.minLength(4),
      Validators.required,
    ]),
    name: new FormControl(''),
    lastname: new FormControl(''),
    middlename: new FormControl(''),
  });
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  submit() {
    if (this.registrationForm.valid) {
      const registrationData: Registration = {
        username: this.registrationForm.get('username')?.value,
        password: this.registrationForm.get('password')?.value,
        firstName: this.registrationForm.get('name')?.value,
        lastName: this.registrationForm.get('lastname')?.value,
        middleName: this.registrationForm.get('middlename')?.value,
      };
      this.authService.registration(registrationData).subscribe({
        next: () => {
          this.toastr.success('Успешно');
          setTimeout(() => {
            this.router.navigate(['/']);
          });
        },
        error: () => {
          this.toastr.error('Попробуйте позже', 'Произошла ошибка');
        },
      });
    }
  }
}
