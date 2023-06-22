import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book;
  @Output() cardDeleted: EventEmitter<number> = new EventEmitter<number>();
  @Input() even: boolean; 
  
  constructor(private booksService: BooksService) {}

  eliminarCard(id_book: number) {
    console.log('Eliminar libro:', id_book);
    this.booksService.delete(id_book).subscribe(
      (data: Book) => {
        this.cardDeleted.emit(id_book);
      },
      error => {
        console.log(error);
      }
    );
  }
}
