import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import ToDo from 'src/app/core/models/todo.interface';
import {
  addFinishedList,
  removeTodoItem,
} from 'src/app/modules/todo/store/actions/todo.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  // Inputs
  @Input() id = '';
  @Input() text = '';
  @Input() checked = false;
  @Input() isFinished: boolean = false;

  constructor(private store: Store<AppState>) {}

  /**
   * @description
   * Remove item from todo
   *
   */
  removeItem(): void {
    this.store.dispatch(removeTodoItem({ id: this.id }));
  }

  /**
   *
   * @param checked
   */
  addToFinishedList(checked: boolean) {
    if (checked) {
      const item: ToDo = { id: this.id, text: this.text, checked };
      this.store.dispatch(addFinishedList({ item }));
    }
  }
}
