import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  tasks:string[]=[];
  newTask:string="";  // two way binding 


  addTask(){
    this.tasks.push(this.newTask)
    this.newTask=""
  }

  deleteTask(task:string){
    this.tasks=this.tasks.filter(ele=>ele!=task);
   
  }

  editTask(task:string){
    this.newTask=task;
   
  }


}