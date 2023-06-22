import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchId: number;
  filteredBooks: Book[] = [];
  books: Book[];

  nuevoLibro: Book = new Book(0, 0, "", "", "", 0, "");

  constructor(private booksService: BooksService, private toastr: ToastrService) { }

  ngOnInit(): void 
  {
    this.getBooks();
    this.buscarLibro(); 
  }

  getBooks(): void 
  {
    this.booksService.getAll().subscribe(
      (data: any) => {
        this.books = data.books;
        this.filteredBooks = this.books; 
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buscarLibro(): void 
  {
    if (this.searchId) {
      const book = this.books.find(book => book.id_book === this.searchId);
      if (book) {
        this.filteredBooks = [book];
      } else {
        this.toastr.error('El libro no existe');
        this.filteredBooks = [];
      }
    } else {
      this.filteredBooks = this.books;
    }
  }

  eliminarCard(id_book: number): void 
  {
    const index = this.filteredBooks.findIndex(book => book.id_book === id_book);
    if (index !== -1) 
    {
      this.filteredBooks.splice(index, 1);
    }
  }
}
