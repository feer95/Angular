import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  
  private url = "http://localhost:3000/books"
  constructor(private http: HttpClient) { }
  
  // Métodos
  getAll(): Observable<Book[]> 
  {
    return this.http.get<Book[]>(this.url)
  }

  getOne(id_book: number): Observable<Book> 
  {
    return this.http.get<Book>(this.url);
  }

  add(book: Book): Observable<Book> 
  {
    return this.http.post<Book>(this.url, book);
  }

  edit(book: Book): Observable<Book> 
  {
    return this.http.put<Book>(this.url, book);
  }

  delete(id_book: number): Observable<Book> 
  {
    return this.http.delete<Book>(this.url);
  }
 
}
