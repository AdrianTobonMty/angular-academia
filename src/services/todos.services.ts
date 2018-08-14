import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getTodo(id: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
