import { createReducer, on } from '@ngrx/store';
import ToDo from 'src/app/core/models/todo.interface';
import {
  addTodoItem,
  loadToDoList,
  loadToDoListSuccess,
  removeTodoItem,
} from '../actions/todo.actions';

export interface ToDoState {
  loading: boolean;
  todoList: ToDo[];
}

export const initialState: ToDoState = {
  loading: false,
  todoList: [],
};

export const todoReducer = createReducer(
  initialState,
  on(loadToDoList, (state) => {
    return { ...state, loading: true };
  }),
  on(loadToDoListSuccess, (state, { todoList }) => {
    return { ...state, loading: false, todoList };
  }),
  on(addTodoItem, (state, { item }) => {
    return { ...state, todoList: [...state.todoList, item] };
  }),
  on(removeTodoItem, (state, { id }) => {
    return {
      ...state,
      todoList: state.todoList.filter((item) => item.id !== id),
    };
  })
);
