import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'not done' | 'done';
}

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  addTask(task: Omit<Task, 'id'>) {
    this.tasks.push({ ...task, id: this.nextId++ });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  toggleStatus(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = task.status === 'done' ? 'not done' : 'done';
    }
  }
}
