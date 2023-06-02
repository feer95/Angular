import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  searchId: number;
  filteredBooks: Book[] = [];
  books: Book[] = [];

  //Si inicializas con null, muestra los placeholders
  nuevoLibro: Book = new Book(0,0,"","","",0,""); 

  constructor(private booksService: BooksService, private toastr: ToastrService) {}

  ngOnInit() {
    this.books = this.booksService.getAll();
    this.filteredBooks = this.books;
  }

  agregarLibro(formulario: any) {
    // Validar que se hayan ingresado todos los campos requeridos
    if (this.nuevoLibro.title && this.nuevoLibro.author && this.nuevoLibro.type && this.nuevoLibro.price && this.nuevoLibro.photo) {
      // Generar un nuevo ID para el libro
      const newId = this.books.length + 1;
  
      // Crear una instancia del nuevo libro
      const nuevoLibro = new Book(
        newId,
        0, // Asignar ID de usuario como 0 (valor predeterminado)
        this.nuevoLibro.title,
        this.nuevoLibro.type,
        this.nuevoLibro.author,
        this.nuevoLibro.price,
        this.nuevoLibro.photo
      );
  
      // Agregar el nuevo libro al array de libros
      this.books.push(nuevoLibro);

      //Reset del Formulario
      formulario.resetForm(); 

      this.toastr.success('El libro se agrego bien')  
    }
  }

  
  eliminarCard(id: number) {
    let i = 0; // FER: Sin break. Busca hasta que el id coincida y  si lo es, elimina con splice
    while (i < this.books.length) {
      if (this.books[i].id_book === id) {
        this.books.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  buscarLibro() {
    let books = this.booksService.getAll();
    let filteredBooks: Book[] = [];
  
    if (this.searchId) {
      let i = 0;
      while (i < books.length && !filteredBooks.length) {
        if (books[i].id_book === this.searchId) {
          filteredBooks.push(books[i]);
        }
        i++;
      }
  
      if (filteredBooks.length === 0) {
        this.toastr.error('El libro no existe')  
        }
    } else {
      filteredBooks = books; 
    }
  
    return this.filteredBooks = filteredBooks;
  }
}



