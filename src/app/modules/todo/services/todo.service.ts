import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import ToDo from 'src/app/core/models/todo.interface';
import { environment } from 'src/environments/environment';

const baseURL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getDataAPI(): Observable<any> {
    return this.httpClient.get<ToDo[]>(`${baseURL}/todoList`);
  }

  addItem(item: ToDo): Observable<any> {
    return this.httpClient.post(`${baseURL}/todoList`, item);
  }
}
