import { NgModule } from '@angular/core';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { CommonModule } from '@angular/common';
import { OfferListComponent } from './components/offer-list';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [OfferHelpPageRoutingModule, SharedModule, CommonModule],
  declarations: [OfferHelpComponent, OfferListComponent],
  exports: [OfferHelpComponent],
})
export class OfferHelpPageModule {}
