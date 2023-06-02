import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  // FER: Atributos del libro
  nuevoLibro: Book;
  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
  id_book: number;
  id_user: number;

  constructor(private booksService: BooksService, private toastr: ToastrService) {}
  
  // FER: Función recoge los # del formulario
  agregarLibro(title: string, type: string, author: string, price: number, photo: string, id_book: number) {
    // FER: Igualamos los datos a los que recoge el form
    this.title = title;
    this.type = type;
    this.author = author;
    this.price = price;
    this.photo = photo;
    this.id_book = id_book;
    // FER: Esto crea un nuevo Libro que añadimos luego a book service
    this.nuevoLibro = {
      title: this.title,
      type: this.type,
      author: this.author,
      price: this.price,
      photo: this.photo,
      id_book: this.id_book,
      id_user: this.id_user
    };
  
    this.booksService.add(this.nuevoLibro);
    this.toastr.success('El libro se agrego bien')  
  }
}
