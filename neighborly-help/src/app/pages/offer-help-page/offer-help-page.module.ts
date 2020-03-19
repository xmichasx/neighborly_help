import { NgModule } from '@angular/core';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';
import { OfferHelpPageRoutingModule } from './offer-help-page-routing.module';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [OfferHelpPageRoutingModule, SharedModule, CommonModule],
  declarations: [OfferHelpComponent, OfferListComponent],
  exports: [OfferHelpComponent],
})
export class OfferHelpPageModule {}
