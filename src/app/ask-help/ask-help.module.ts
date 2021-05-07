import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskHelpRoutingModule } from './ask-help-routing.module';
import { AskHelpComponent } from './ask-help.component';
import { HelpersComponent } from './helpers/helpers.component';
import { SingleHelperComponent } from './helpers/single-helper/single-helper.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { SingleProposalComponent } from './proposals/single-proposal/single-proposal.component';
import { CreatedTasksComponent } from './created-tasks/created-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HelperDetailsComponent } from './helpers/helper-details/helper-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AskHelpComponent, HelpersComponent, SingleHelperComponent, ProposalsComponent, SingleProposalComponent, CreatedTasksComponent, CreateTaskComponent, HelperDetailsComponent],
  imports: [
    CommonModule,
    AskHelpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AskHelpModule { }
