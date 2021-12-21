import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { CheckboxModule } from '../ui-controls/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, CheckboxModule, FormsModule],
  exports: [TodoItemComponent],
})
export class TodoItemModule {}
