import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ToDo from 'src/app/core/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  // Inputs
  @Input() todoList: ToDo[] | null = [];
  // Outputs
  @Output() removeToDoItem = new EventEmitter<string>();

  /**
   * @description
   * Emit the ToDo id to remove
   *
   */
  removeItem(id: string): void {
    this.removeToDoItem.emit(id);
  }
}
