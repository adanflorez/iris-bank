import { Component, OnInit } from '@angular/core';
import CustomSelect from 'src/app/core/models/custom-select';
import ToDo from 'src/app/core/models/todo.interface';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
// Store
import { select, Store } from '@ngrx/store';
import { addTodoItem, loadToDoList } from '../store/actions/todo.actions';
import {
  selectTodoList,
  selectToDoLoading,
} from '../store/selectors/todo.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  options: CustomSelect[] = [];
  category: string = '';
  todoList: ToDo[] = [];
  loading$: Observable<boolean> = new Observable();
  todoList$: Observable<ToDo[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.pipe(select(selectToDoLoading));
    this.todoList$ = this.store.pipe(select(selectTodoList));
    this.store.dispatch(loadToDoList());

    this.options = [
      {
        text: '-- Select category --',
        value: '',
        selected: true,
      },
      {
        text: 'All',
        value: 'all',
      },
    ];
  }

  chooseCategory(category: string) {
    this.category = category;
  }

  addToDoItem(item: string) {
    const uid = uuidv4();
    const todoItem: ToDo = {
      id: uid,
      text: item,
      checked: false,
    };
    this.store.dispatch(addTodoItem({ item: todoItem }));
  }

  removeItem(id: string) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}
