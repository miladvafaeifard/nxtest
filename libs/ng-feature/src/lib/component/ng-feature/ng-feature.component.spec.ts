import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { NgSharedModule } from '@nxtest/ng-shared';

import { NgFeatureComponent } from './ng-feature.component';
import { APP_BASE_HREF } from '@angular/common';

describe('NgFeatureComponent', () => {
  let component: NgFeatureComponent;
  let fixture: ComponentFixture<NgFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgFeatureComponent ],
      imports: [NgSharedModule, RouterModule.forChild([])],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
