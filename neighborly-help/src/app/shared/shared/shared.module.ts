import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedListComponent } from './shared-list/shared-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [SharedListComponent],
  exports: [SharedListComponent],
  imports: [CommonModule, AgGridModule],
})
export class SharedModule {}
