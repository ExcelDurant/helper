import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../../services/shared/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {


  taskForm = new FormGroup({
    taskName: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    reward: new FormControl('')
  });

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  // function that creates new tasks on submit
  createTask() {
    const taskName = this.taskForm.value.taskName;
    const description = this.taskForm.value.description;
    const category = this.taskForm.value.category;
    const country = this.taskForm.value.country;
    const city = this.taskForm.value.city;
    const street = this.taskForm.value.street;
    const date = this.taskForm.value.date;
    const time = this.taskForm.value.time;
    const reward = this.taskForm.value.reward;
    console.log(this.taskForm.value);

    // initialises a new task containing all the task properties
    const newTask: Task = {
      name: taskName,
      description: description,
      category: category,
      country: country,
      city: city,
      street: street,
      date: date,
      time: time,
      reward: reward
    }

    // sends the created task to the task service then sends it to the database
    this.taskService.createTask(newTask);
    window.alert("your new task has been successfully published");

    // replaces the inputs with empty
    this.taskForm.setValue({
      taskName: '',
      description: '',
      category: '',
      country: '',
      city: '',
      street: '',
      date: '',
      time: '',
      reward: ''
    });
  }

}
