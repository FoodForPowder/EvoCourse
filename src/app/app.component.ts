import { Component } from '@angular/core';
import { AuthStoreService } from './services/auth-store.service';
import { Roles } from './enums/roles.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvoCourse';
  

}
