import { Component, OnInit } from '@angular/core';
import CustomSelect from 'src/app/core/models/custom-select';
import ToDo from 'src/app/core/models/todo.interface';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  options: CustomSelect[] = [];
  category: string = '';
  todoList: ToDo[] = [];

  constructor() {}

  ngOnInit(): void {
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
    this.todoList.push({
      id: uid,
      text: item,
      checked: false,
    });
  }
}
