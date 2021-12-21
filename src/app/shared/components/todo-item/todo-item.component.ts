import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeTodoItem } from 'src/app/modules/todo/store/actions/todo.actions';
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

  //Outputs
  @Output() removeToDoItem = new EventEmitter<string>();

  constructor(private store: Store<AppState>) {}

  /**
   * @description
   * Remove item from todo
   *
   */
  removeItem(): void {
    this.store.dispatch(removeTodoItem({ id: this.id }));
  }
}
