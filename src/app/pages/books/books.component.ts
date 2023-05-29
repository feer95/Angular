import { Component,} from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  books: Book[] = [
    new Book(1, 1, 'Book 1', 'Tapa Blanda', 'Autor 1', 10.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(2, 1, 'Book 2', 'Tapa Dura', 'Autor 2', 12.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(3, 1, 'Book 3', 'Tapa Blanda', 'Autor 3', 14.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(4, 1, 'Book 4', 'Tapa Blanda', 'Autor 1', 16.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(5, 1, 'Book 5', 'Tapa Dura', 'Autor 2', 18.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
    new Book(6, 1, 'Book 6', 'Tapa Blanda', 'Autor 3', 20.97, 'https://marketplace.canva.com/EAFEL6G6JSU/1/0/1003w/canva-portada-de-libro-pdf-electr%C3%B3nico-digital-silueta-persona-rosa-azul-oS2hyQNbxmM.jpg'),
  
  ];
  //Si inicializas con null, muestra los placeholders
  nuevoLibro: Book = new Book(0,0,"","","",0,""); 

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
    }
  }

  eliminarCard(id: number) {
    // Iteración por el array 
    for (let i = 0; i < this.books.length; i++) {
      // Si el id_book es igual al id
      if (this.books[i].id_book === id) {
        //Lo borramos del array
        this.books.splice(i, 1);
        // Y salimos
        break;
      }
    }
  }
}



