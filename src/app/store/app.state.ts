import { ActionReducerMap } from '@ngrx/store';
import {
  todoReducer,
  ToDoState,
} from '../modules/todo/store/reducers/todo.reducers';

export interface AppState {
  todo: ToDoState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  todo: todoReducer,
};
