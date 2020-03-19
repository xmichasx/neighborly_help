import { Component, OnInit } from '@angular/core';
import { OfferHelpService } from '../../service/offer-help.service';

@Component({
  selector: 'nh-offer-help',
  templateUrl: './offer-help.component.html',
  styleUrls: ['./offer-help.component.scss'],
})
export class OfferHelpComponent implements OnInit {
  constructor(private offerHelpService: OfferHelpService) {}

  ngOnInit() {}

  getOfferHelp() {
    return this.offerHelpService.getOfferData();
  }
}
