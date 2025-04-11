import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[];
  constructor() {
    this.books = [
      {
        title: 'Война и мир',
        author: 'Лев Толстой',
      },
      {
        title: 'Преступление и наказание',
        author: 'Федор Достоевский',
      },
      {
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
      },
    ];
  }
  public GetBooks(): Observable<Book[]> {
    return of(this.books);
  }
  public AddBook(book: Book): void {
    this.books.push({ ...book });
  }
}
