import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent 
{
  nuevoLibro: Book;
  id_book: number;
  id_user: number;
  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
  

  constructor(private booksService: BooksService, private toastr: ToastrService) {}
  
  agregarLibro(id_book: number, id_user: number, title: HTMLInputElement, type: HTMLInputElement, author: HTMLInputElement, price: number, photo: HTMLInputElement) {
    let nuevoLibro: Book = new Book(id_book, id_user, title.value, type.value, author.value, price, photo.value);
    this.booksService.add(nuevoLibro);
    this.toastr.success('El libro se agregó correctamente');
  }
  
}
