import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskHelpComponent } from './ask-help.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { CreatedTasksComponent } from './created-tasks/created-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  { path: '', component: AskHelpComponent },
  { path:'helpers', component: HelpersComponent, outlet: "outlet1"},
  { path:'proposals', component: ProposalsComponent, outlet: "outlet1"},
  { path:'created-tasks', component: CreatedTasksComponent, outlet: "outlet1"},
  { path:'create-task', component: CreateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskHelpRoutingModule { }
