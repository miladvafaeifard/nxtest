import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSharedModule } from '@nxtest/ng-shared';
import { NgFeatureComponent } from './component/ng-feature/ng-feature.component';

@NgModule({
  imports: [CommonModule, NgSharedModule, RouterModule.forChild([{path: '**', component: NgFeatureComponent}])],
  declarations: [NgFeatureComponent],
})
export class NgFeatureModule {}
