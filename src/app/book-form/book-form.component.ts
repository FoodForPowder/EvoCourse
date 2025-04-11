import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { onlyRusLetterValidator } from '../validators/validators';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookform = new FormGroup({
    title: new FormControl('', [Validators.required, onlyRusLetterValidator]),
    author: new FormControl('', [Validators.required, onlyRusLetterValidator]),
  });
  book: Book = {
    title: '',
    author: '',
  };
  constructor(private bookService: BookService) {
    this.bookform.valueChanges.subscribe((data) => {
      this.book = data as Book;
    });
  }

  public addBook() {
    this.bookService.AddBook(this.book);
    this.bookform.reset();
    this.book = {
      title: '',
      author: '',
    };
  }
}
