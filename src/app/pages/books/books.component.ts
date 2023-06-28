import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchId: number;
  filteredBooks: Book[] = [];
  books: Book[] = [];

  nuevoLibro: Book = new Book(0, 0, "", "", "", 0, "");

  constructor(private booksService: BooksService, private toastr: ToastrService, private UserService: UserService) 
  { console.log(this.UserService.user);
  
    this.booksService.getAll(this.UserService.user.id_user).subscribe((resp: Respuesta) => {
    this.books = resp.data


    console.log(this.books);
  })};

  ngOnInit(): void 
  {
    this.getBooks();
  }

  

  getBooks(): void {
   
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
