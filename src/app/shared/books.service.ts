import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  // Atributo Privado
  private books: Book[] = [
    new Book(1, 1, 'Book 1', 'Tapa Blanda', 'Autor 1', 10.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(2, 1, 'Book 2', 'Tapa Dura', 'Autor 2', 12.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(3, 1, 'Book 3', 'Tapa Blanda', 'Autor 3', 14.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(4, 1, 'Book 4', 'Tapa Blanda', 'Autor 1', 16.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(5, 1, 'Book 5', 'Tapa Dura', 'Autor 2', 18.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(6, 1, 'Book 6', 'Tapa Blanda', 'Autor 3', 20.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
  
  ];

  constructor() { }
  
  // Métodos
  getAll(): Book[] {
    return this.books;
  }

  getOne(id_book: number): Book | undefined {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id_book === id_book) {
        return this.books[i];
      }
    }
    alert('¡El libro no está en la base de datos!'); 
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
