import { createReducer, on } from '@ngrx/store';
import ToDo from 'src/app/core/models/todo.interface';
import {
  addTodoItem,
  addFinishedList,
  loadToDoList,
  loadToDoListSuccess,
  removeTodoItem,
  loadFinishedListSuccess,
  loadFinishedList,
} from '../actions/todo.actions';

export interface ToDoState {
  loading: boolean;
  todoList: ToDo[];
  finishedList: ToDo[];
}

export const initialState: ToDoState = {
  loading: false,
  todoList: [],
  finishedList: [],
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
  }),
  on(addFinishedList, (state, { item }) => {
    return { ...state, finishedList: [...state.finishedList, item] };
  }),
  on(loadFinishedList, (state) => {
    return { ...state, loading: true };
  }),
  on(loadFinishedListSuccess, (state, { finishedList }) => {
    return { ...state, loading: false, finishedList };
  }),
);
