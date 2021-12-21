import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { ToDoState } from '../reducers/todo.reducers';

export const selectToDo = (state: AppState) => state.todo;
export const selectTodoList = createSelector(
  selectToDo,
  (state: ToDoState) => state.todoList
);
export const selectToDoLoading = createSelector(
  selectToDo,
  (state: ToDoState) => state.loading
);

export const selectFinishedList = createSelector(
  selectToDo,
  (state: ToDoState) => state.finishedList
);
