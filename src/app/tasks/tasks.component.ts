import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: { name: string, completed: boolean }[] = [];
  newTask: string = '';

  constructor() { }

  ngOnInit(): void {
    // Fetch tasks from storage or initialize empty array
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  editTask(index: number): void {
    const editedTask = prompt('Edit task:', this.tasks[index].name);
    if (editedTask !== null) {
      this.tasks[index].name = editedTask;
      this.saveTasks();
    }
  }

  markAsCompleted(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
