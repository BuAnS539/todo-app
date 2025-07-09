import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./pages/tasks-list/tasks-list').then(m => m.TasksListComponent)
  },
  {
    path: 'tasks/new',
    loadComponent: () =>
      import('./pages/task-form/task-form').then(m => m.TaskFormComponent)
  },
  {
    path: 'tasks/:id',
    loadComponent: () =>
      import('./pages/task-detail/task-detail').then(m => m.TaskDetailComponent)
  }
];

