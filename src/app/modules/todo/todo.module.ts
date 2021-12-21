import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { PageComponent } from './page/page.component';
import { SelectModule } from 'src/app/shared/components/ui-controls/select/select.module';
import { InputButtonModule } from 'src/app/shared/components/ui-controls/input-button/input-button.module';
import { TodoListModule } from 'src/app/shared/components/todo/todo-list.module';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './store/effects/todo.effects';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SelectModule,
    InputButtonModule,
    TodoListModule,
    EffectsModule.forFeature([ToDoEffects]),
    HttpClientModule,
  ],
  providers: [TodoService],
})
export class TodoModule {}
