import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private meta: Meta, private title: Title) {
    
    this.meta.addTag({ name: 'og:desc', content: ' root_desc' });
    this.title.setTitle('Desk Page');
  }
}
