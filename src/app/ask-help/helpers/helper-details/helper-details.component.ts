import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Helper } from 'src/app/services/shared/helper';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'app-helper-details',
  templateUrl: './helper-details.component.html',
  styleUrls: ['./helper-details.component.scss']
})
export class HelperDetailsComponent implements OnInit {

  helper!: Helper;

  constructor(
    public helpersService:HelpersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHelper();
  }

  getHelper() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.helpersService.getHelper(id).subscribe((data:any) => {
      this.helper = data[0];
    });
  }

}
