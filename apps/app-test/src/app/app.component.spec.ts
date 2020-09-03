import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgSharedModule } from '@nxtest/ng-shared';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgSharedModule, RouterModule.forRoot([])],
      providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
      }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
