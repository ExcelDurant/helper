import { Component, OnInit } from '@angular/core';
import { Helper } from '../../services/shared/helper';
import { HelpersService } from '../../services/helpers.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.scss']
})
export class HelpersComponent implements OnInit {


  helpers!: Helper[];

  constructor( public helpersService:HelpersService) { }

  ngOnInit(): void {
    this.getHelpers();
  }

  getHelpers() {
    this.helpersService.getHelpers().subscribe((data) => {
      console.log(data);
      this.helpers = data;
    })
  }

}
