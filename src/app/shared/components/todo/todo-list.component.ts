import { Component, Input, OnInit } from '@angular/core';
import ToDo from 'src/app/core/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList: ToDo[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
