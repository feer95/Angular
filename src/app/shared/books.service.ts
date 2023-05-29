import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  //Atributo Privado
  private books: Book[] = [];

  constructor() { }

  // Métodos
  getAll(): Book[] {
    return this.books;
  }

  getOne(id_book: number): Book {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book === id_book) {
        return this.books[i];
      }
    }
  }

  add(book: Book): void {
    this.books.push(book);
  }

  edit(book: Book): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book === book.id_book) {
        this.books[i] = book;
        return true;
      }
    }
    return false;
  }

  delete(id_book: number): boolean {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book === id_book) {
        this.books.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
