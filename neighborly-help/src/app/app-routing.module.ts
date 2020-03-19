import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesEnum } from './enums/routes.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `/${RoutesEnum.OfferHelp}` },
  {
    path: RoutesEnum.OfferHelp,
    loadChildren: () =>
      import('./pages/offer-help-page/offer-help-page.module').then(
        m => m.OfferHelpPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
