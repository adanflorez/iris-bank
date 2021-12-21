import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import ToDo from 'src/app/core/models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getDataAPI(): Observable<any> {
    const data: ToDo[] = [
      {
        id: '1',
        text: 'Primera tarea',
        checked: false,
      },
      {
        id: '2',
        text: 'Segunda tarea',
        checked: false,
      },
    ];

    return of(data).pipe(delay(2000));
  }
}
