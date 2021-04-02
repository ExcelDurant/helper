import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeHelperRoutingModule } from './be-helper-routing.module';
import { BeHelperComponent } from './be-helper.component';
import { JobMapComponent } from './job-map/job-map.component';
import { JobsComponent } from './jobs/jobs.component';
import { SingleJobComponent } from './jobs/single-job/single-job.component';


@NgModule({
  declarations: [BeHelperComponent, JobMapComponent, JobsComponent, SingleJobComponent],
  imports: [
    CommonModule,
    BeHelperRoutingModule
  ]
})
export class BeHelperModule { }
