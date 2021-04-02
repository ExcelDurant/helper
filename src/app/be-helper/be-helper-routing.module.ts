import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeHelperComponent } from './be-helper.component';

const routes: Routes = [
  { path: '', component: BeHelperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeHelperRoutingModule { }
