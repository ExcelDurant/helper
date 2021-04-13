import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskHelpComponent } from './ask-help.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { CreatedTasksComponent } from './created-tasks/created-tasks.component';

const routes: Routes = [
  { path: '', component: AskHelpComponent },
  { path:'helpers', component: HelpersComponent, outlet: 'askhelp'},
  { path:'proposals', component: ProposalsComponent, outlet: 'askhelp'},
  { path:'created-tasks', component: CreatedTasksComponent, outlet: 'askhelp'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskHelpRoutingModule { }
