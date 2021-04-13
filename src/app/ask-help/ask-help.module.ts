import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskHelpRoutingModule } from './ask-help-routing.module';
import { AskHelpComponent } from './ask-help.component';
import { HelpersComponent } from './helpers/helpers.component';
import { SingleHelperComponent } from './helpers/single-helper/single-helper.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { SingleProposalComponent } from './proposals/single-proposal/single-proposal.component';
import { CreatedTasksComponent } from './created-tasks/created-tasks.component';
import { AskHelpTabComponent } from '../partial/ask-help-tab/ask-help-tab.component';


@NgModule({
  declarations: [AskHelpComponent, HelpersComponent, SingleHelperComponent, ProposalsComponent, SingleProposalComponent, CreatedTasksComponent, AskHelpTabComponent],
  imports: [
    CommonModule,
    AskHelpRoutingModule
  ]
})
export class AskHelpModule { }
