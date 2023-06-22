import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta'
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  searchId: number;
  filteredBooks: Book[] = [];
  books: Book[];

  nuevoLibro: Book = new Book(0,0,"","","",0,""); 

  constructor(private booksService: BooksService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.booksService.getAll().subscribe(
      (data: Book[]) => {
        this.books = data;
        console.log(this.books); 
      },
      (error) => {
        console.log(error); 
      }
    );
  }
  

  buscarLibro() {
    this.booksService.getAll().subscribe(
      (books: Book[]) => {
        let filteredBooks: Book[] = [];
    
        if (this.searchId) {
          filteredBooks = books.filter(book => book.id_book === this.searchId);
    
          if (filteredBooks.length === 0) {
            this.toastr.error('El libro no existe');
          }
        } else {
          filteredBooks = books; 
        }
    
        this.filteredBooks = filteredBooks;
      },
      (error) => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }


}
