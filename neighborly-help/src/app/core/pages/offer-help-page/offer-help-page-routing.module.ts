import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';
import { RoutesEnum } from '../../../enums';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: RoutesEnum.OfferHelp_SearchTask },
  // TODO: Rename This Component to SearchTaskComponent
  { path: RoutesEnum.OfferHelp_SearchTask, component: OfferHelpComponent },
  {
    path: RoutesEnum.OfferHelp_AcceptedTasks,
    component: AcceptedTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferHelpPageRoutingModule {}
