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

  editarLibro(title: string, type: string, author: string, price: number, photo: string, id_book: number) {
    this.title = title;
    this.type = type;
    this.author = author;
    this.price = price;
    this.photo = photo;
    this.id_book = id_book;
    
    this.libroEdit =  {
      title: this.title,
      type: this.type,
      author: this.author,
      price: this.price,
      photo: this.photo,
      id_book: this.id_book,
      id_user: this.id_user
    };

    
    
    this.booksService.edit(this.libroEdit);
    this.toastr.success('El libro se editó bien')  
  }
}



  
  
   
  