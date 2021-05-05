import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-help',
  templateUrl: './ask-help.component.html',
  styleUrls: ['./ask-help.component.scss']
})
export class AskHelpComponent implements OnInit {

  cars = ['mercedes', 'bmw', 'mazda', 'ferrari'];
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('cars', JSON.stringify(this.cars));
    localStorage.getItem('brand');
    console.log(localStorage);
  }
}
