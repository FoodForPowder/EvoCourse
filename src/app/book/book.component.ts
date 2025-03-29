import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { book } from '../data/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  public book: book | undefined;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.bookService.getBookByid(1).subscribe((value) => (this.book = value));
  }
}
