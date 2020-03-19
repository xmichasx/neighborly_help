import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferHelpComponent } from './containers/offer-help/offer-help.component';

const routes: Routes = [{ path: '', component: OfferHelpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferHelpPageRoutingModule {}
