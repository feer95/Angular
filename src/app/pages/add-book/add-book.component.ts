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
  nuevoLibro: Book;
  id_book: number;
  id_user: number;
  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
  

  constructor(private booksService: BooksService, private toastr: ToastrService) {}
  
  agregarLibro() {
    const nuevoLibro: Book = new Book(
      this.id_book,
      this.id_user,
      this.title,
      this.type,
      this.author,
      this.price,
      this.photo
    );

    this.booksService.add(nuevoLibro).subscribe(
      (data: Book) => {
        this.toastr.success('El libro se agregó correctamente');

        this.id_book = null;
        this.id_user = null;
        this.title = '';
        this.type = '';
        this.author = '';
        this.price = null;
        this.photo = '';
      },
      (error) => {
        console.log('Error al agregar el libro:', error);
        this.toastr.error('Ocurrió un error al agregar el libro');
      }
    );
  }  
}
