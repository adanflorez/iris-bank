import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  /**
   * @description
   * Emit the ToDo id to remove
   *
   */
  removeItem(): void {
    this.removeToDoItem.emit(this.id);
  }
}
