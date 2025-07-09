import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService, Task } from '../../services/tasks';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  templateUrl: './task-detail.html',
  styleUrls: ['./task-detail.css'],
  imports: [NgIf]
})
export class TaskDetailComponent {
  task?: Task;

  constructor(
    private route: ActivatedRoute,
    public router: Router,           
    private tasksService: TasksService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.tasksService.getTask(id);
  }
}
