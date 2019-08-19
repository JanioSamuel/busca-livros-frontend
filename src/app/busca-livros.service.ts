import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscaLivrosService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl = 'http://localhost:3000/api';
  getAllBooks() {
    return this.http.get(`${this.baseUrl}/livros`);
  }

  getBooksFilter(data: any) {
    return this.http.post(`${this.baseUrl}/filter`, data);
  }

  getBookDetails(id: any) {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }
}
