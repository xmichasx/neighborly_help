import { NgModule } from '@angular/core';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { AcceptedTasksComponent } from './containers/accepted-tasks/accepted-tasks.component';

@NgModule({
  imports: [OfferHelpPageRoutingModule],
  declarations: [OfferHelpComponent, AcceptedTasksComponent],
})
export class OfferHelpPageModule {}
