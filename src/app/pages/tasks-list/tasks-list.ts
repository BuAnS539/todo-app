import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TasksService, Task } from '../../services/tasks';
import { NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.html',
  styleUrls: ['./tasks-list.css'],
  imports: [NgFor, RouterLink, NgClass, FormsModule]
})
export class TasksListComponent {
  tasks: Task[] = [];

  searchText = '';
  statusFilter: 'all' | 'done' | 'not done' = 'all';

  constructor(private tasksService: TasksService, private router: Router) {
    this.tasks = this.tasksService.getTasks();
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
    this.tasks = this.tasksService.getTasks();
  }

  toggleStatus(id: number) {
    this.tasksService.toggleStatus(id);
    this.tasks = this.tasksService.getTasks();
  }

  get filteredTasks(): Task[] {
    return this.tasks.filter(task => {
      const matchesText =
        !this.searchText ||
        task.title.toLowerCase().includes(this.searchText.toLowerCase());

      const matchesStatus =
        this.statusFilter === 'all' || task.status === this.statusFilter;

      return matchesText && matchesStatus;
    });
  }
}
