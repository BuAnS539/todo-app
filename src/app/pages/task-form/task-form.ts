import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
  imports: [FormsModule]
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private tasksService: TasksService, private router: Router) {}

  onSubmit() {
    if (!this.title.trim()) {
      return;
    }

    this.tasksService.addTask({
      title: this.title,
      description: this.description,
      status: 'not done'
    });

    this.router.navigate(['/tasks']);
  }
}
