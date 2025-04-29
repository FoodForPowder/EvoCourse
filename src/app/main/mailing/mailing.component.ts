import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css'],
})
export class MailingComponent {
  mailingForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private toast: ToastrService) {}
  submit() {
    if (this.mailingForm.valid) {
      this.toast.success('Вы подписались на рассылку', 'Успешно');
    }
  }
}
