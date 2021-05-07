import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Task } from './shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private dbPath = "/tasks";
  taskRef:any;

  constructor(public db: AngularFireDatabase) {
    this.taskRef = db.list('tasks');
   }

  createTask(task:Task) {
    this.taskRef.push(task);
  }

  getTasks() {
    return this.taskRef;
  }

}
