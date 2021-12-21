import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import {
  ADD_ITEM,
  FINISHED_TODO,
  LOAD_FINISHED_SUCCESS,
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  REMOVE_ITEM,
} from '../types';

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

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>(REMOVE_ITEM),
      switchMap((action) => {
        return this.todoService.removeItem(action.id).pipe(
          map((item) => ({ type: LOAD_ITEMS })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  addItemToFinished$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>(FINISHED_TODO),
      switchMap((action) => {
        console.log(action);
        return this.todoService.addItemToFinishedList(action.item).pipe(
          map((items) => ({
            type: LOAD_FINISHED_SUCCESS,
            finishedList: items,
          })),
          map(() => ({ type: REMOVE_ITEM, id: action.item.id })),
          catchError(() => EMPTY)
        );
      })
    )
  );

  loadFinishedList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_ITEMS),
      mergeMap(() =>
        this.todoService.getFInishedList().pipe(
          map((items) => ({ type: LOAD_FINISHED_SUCCESS, finishedList: items })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
