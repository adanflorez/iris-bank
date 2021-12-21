import { Component, OnInit } from '@angular/core';
import ToDo from 'src/app/core/models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoList: ToDo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todoList = [
      {
        id: '1',
        text: 'Primera tarea sadbasgdiauhsdioashdoaisdhas da a sdaos a daodaoisdjausdasd ausd asdasud a90sdfsdfsdfsdfsd sdf sfsfewerfwerfwsef...',
        checked: false,
      },
      {
        id: '2',
        text: 'Segunda tarea sadbasgdiauhsdioashdoaisdhas da a sdaos a daodaoisdjausdasd ausd asdasud a90sdfsdfsdfsdfsd sdf sfsfewerfwerfwsef...',
        checked: true,
      },
    ];
  }
}
