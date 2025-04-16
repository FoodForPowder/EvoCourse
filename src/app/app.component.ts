import { Component } from '@angular/core';
import { JsonPlaceholderService } from './services/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvoCourse';
  data: any;
  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
    this.jsonPlaceholderService.getTodos().subscribe((data) => {
      this.data = data;
    });
  }
}
