import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgSharedModule } from '@nxtest/ng-shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgSharedModule, RouterModule.forRoot([{path: '**', loadChildren: () => import('@nxtest/ng-feature').then(m => m.NgFeatureModule)}])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
