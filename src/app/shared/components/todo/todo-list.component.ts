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
  @Input() isFinished: boolean = false;
}
