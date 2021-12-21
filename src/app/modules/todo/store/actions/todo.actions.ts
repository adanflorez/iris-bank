import { createAction, props } from '@ngrx/store';
import ToDo from 'src/app/core/models/todo.interface';
import {
  ADD_ITEM,
  LOAD_ITEMS,
  LOAD_ITEMS_SUCCESS,
  REMOVE_ITEM,
} from '../types';

export const loadToDoList = createAction(LOAD_ITEMS);
export const loadToDoListSuccess = createAction(
  LOAD_ITEMS_SUCCESS,
  props<{ todoList: ToDo[] }>()
);
export const addTodoItem = createAction(ADD_ITEM, props<{ item: ToDo }>());
export const removeTodoItem = createAction(
  REMOVE_ITEM,
  props<{ id: string }>()
);
