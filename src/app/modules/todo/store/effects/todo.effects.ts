import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { ADD_ITEM, LOAD_ITEMS, LOAD_ITEMS_SUCCESS } from '../types';

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

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>(ADD_ITEM),
      switchMap((action) => {
        return this.todoService.addItem(action.item).pipe(
          map((item) => ({ type: LOAD_ITEMS_SUCCESS, todoList: [...item] })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
