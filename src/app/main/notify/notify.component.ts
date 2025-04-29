import { Component } from '@angular/core';
import { NotifyStoreService } from 'src/app/services/notify-store.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css'],
})
export class NotifyComponent {
  constructor(private notify: NotifyStoreService) {}
  closedButtonClicked() {
    this.notify.updateNotify(false);
  }
}
