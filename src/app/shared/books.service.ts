import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  
  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) { }
  
  // Métodos
  getAll(id_user: Number): Observable<any> 
  {
    let apiUrl = `${this.url}?id_user = ${id_user}`;
    return this.http.get(apiUrl)
  }

  getOne(id_book: number): Observable<Book> 
  {
    const apiUrl = `${this.url}/${id_book}`;
    return this.http.get<Book>(apiUrl);
  }

  add(book: Book): Observable<Book> 
  {
    return this.http.post<Book>(this.url, book);
  }

  edit(book: Book): Observable<Book> 
  {
    return this.http.put<Book>(this.url, book);
  }

  delete(id_book : number): Observable<Book> 
  {
    return this.http.delete<Book>(this.url);
  }
 
}
