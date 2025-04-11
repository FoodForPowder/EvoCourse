import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css'],
})
export class BookTableComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[] = [];
  ngOnInit(): void {
    this,
      this.bookService.GetBooks().subscribe((data) => {
        this.books = data;
      });
  }
}
