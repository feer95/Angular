import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})

export class UpdateBookComponent {
  libroEdit: Book;
  title: string;
  type: string;
  author: string;
  price: number;
  photo: string;
  id_book: number;
  id_user: number;

  constructor(private booksService: BooksService, private toastr: ToastrService) {}

  editarLibro() {
      this.libroEdit =  {
      id_book: this.id_book,
      id_user: this.id_user,
      title: this.title,
      type: this.type,
      author: this.author,
      price: this.price,
      photo: this.photo     
    };

    this.booksService.edit(this.libroEdit)
      .subscribe(
        (data: Book) => {
          this.toastr.success('El libro se editó correctamente');
          
          this.libroEdit = data;

          this.id_book = null;
          this.id_user = null;
          this.title = '';
          this.type = '';
          this.author = '';
          this.price = null;
          this.photo = '';
        },
        (error) => {
          console.log(error);
          this.toastr.error('Error al editar el libro');
        }
      );
  }
}
