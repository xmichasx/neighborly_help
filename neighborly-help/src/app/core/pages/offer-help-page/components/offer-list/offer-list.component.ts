import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nh-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
})
export class OfferListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() data;

  columnDef = [
    {
      headerName: 'Id',
      field: 'id',
      sortable: true,
      filter: true,
    },
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
  ];
}
