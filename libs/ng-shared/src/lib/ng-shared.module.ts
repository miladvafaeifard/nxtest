import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSharedComponent } from './component/ng-shared/ng-shared.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgSharedComponent],
  exports: [NgSharedComponent]
})
export class NgSharedModule {}
