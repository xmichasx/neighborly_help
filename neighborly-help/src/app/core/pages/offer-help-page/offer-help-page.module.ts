import { NgModule } from '@angular/core';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';

@NgModule({
  imports: [OfferHelpPageRoutingModule],
  declarations: [OfferHelpComponent],
  exports: [OfferHelpComponent],
})
export class OfferHelpPageModule {}
