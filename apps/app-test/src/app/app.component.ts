import { Component } from '@angular/core';
import { tsShared } from '@nxtest/ts-shared';

@Component({
  selector: 'nxtest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  directTsShared = tsShared();
}
