import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../services/shared/task';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  tasks!: Task[];

  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().snapshotChanges(['child_added'])
    .pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    )
    .subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data;
    })
  }
}
