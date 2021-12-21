import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full',
      },
      {
        path: 'todo',
        loadChildren: () =>
          import('./modules/todo/todo.module').then((m) => m.TodoModule),
      },
      { path: '**', redirectTo: 'todo', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
