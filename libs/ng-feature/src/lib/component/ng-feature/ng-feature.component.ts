import { Component } from '@angular/core';
import { tsShared } from '@nxtest/ts-shared';

@Component({
  selector: 'nxtest-ng-feature',
  templateUrl: './ng-feature.component.html',
  styleUrls: ['./ng-feature.component.css']
})
export class NgFeatureComponent {
  directTsShared = tsShared();
}
