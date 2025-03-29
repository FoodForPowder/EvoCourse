import { Injectable } from '@angular/core';
import { book } from '../data/book.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  private books: book[] = [
    {
      postId: 1,
      id: 1,
      name: 'id labore ex et quam laborum',
      email: 'Eliseo@gardner.biz',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
    },
  ];
  public getBookByid(id: Number): Observable<book | undefined> {
    return of(this.books.find((x) => x.id === id));
  }
}
