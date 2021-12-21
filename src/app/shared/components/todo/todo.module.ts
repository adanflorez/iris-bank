import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoItemModule } from '../todo-item/todo-item.module';

@NgModule({
  declarations: [TodoComponent],
  imports: [CommonModule, TodoItemModule],
  exports: [TodoComponent],
})
export class TodoModule {}
