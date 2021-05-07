import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../services/shared/task';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.scss']
})
export class SingleJobComponent implements OnInit {

  @Input()
  task!: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
