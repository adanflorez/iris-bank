import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { LOAD_ITEMS, LOAD_ITEMS_SUCCESS } from '../types';

@Injectable()
export class ToDoEffects {
  loadToDoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ITEMS),
      mergeMap(() =>
        this.todoService.getDataAPI().pipe(
          map((items) => ({ type: LOAD_ITEMS_SUCCESS, todoList: items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
