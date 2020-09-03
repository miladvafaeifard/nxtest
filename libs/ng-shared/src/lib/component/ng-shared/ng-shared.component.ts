import { Component } from '@angular/core';
import { tsShared } from '@nxtest/ts-shared';

@Component({
  selector: 'nxtest-ng-shared',
  templateUrl: './ng-shared.component.html',
  styleUrls: ['./ng-shared.component.css']
})
export class NgSharedComponent {
  tsSharedInNgShared = tsShared();
}
