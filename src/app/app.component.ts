import { Component } from '@angular/core';
import { JsonPlaceholderService } from './services/jsonPlaceholder.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EvoCourse';
  constructor(private jsonPlaceHolderService: JsonPlaceholderService) {}

  public getPosts() {
    this.jsonPlaceHolderService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  public getPostComments() {
    this.jsonPlaceHolderService.getPostComments().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  public createPost() {
    this.jsonPlaceHolderService.createPost().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  public getPost() {
    this.jsonPlaceHolderService.getPost().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Произошла ошибка: ' + error.message);
      },
    });
  }
  public getPostsWithHeader() {
    this.jsonPlaceHolderService.getPostsWithHeader().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  public deletePost() {
    this.jsonPlaceHolderService.deletePost().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
