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
  @Input() books: Book[]; 
  @Output() cardDeleted: EventEmitter<number> = new EventEmitter<number>();
  @Input() even: boolean; 
  
  constructor(private booksService: BooksService) {}

  eliminarCard() {
    // Llamar al método del servicio para eliminar el libro por su ID
    this.booksService.delete(this.book.id_book);
    // Emitir el evento con el ID del libro
    this.cardDeleted.emit(this.book.id_book);
  }
}
