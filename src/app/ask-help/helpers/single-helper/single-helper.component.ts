import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/services/shared/helper';

@Component({
  selector: 'app-single-helper',
  templateUrl: './single-helper.component.html',
  styleUrls: ['./single-helper.component.scss']
})
export class SingleHelperComponent implements OnInit {

  @Input()
  helper!: Helper;

  constructor() { }

  ngOnInit(): void {
  }

}
