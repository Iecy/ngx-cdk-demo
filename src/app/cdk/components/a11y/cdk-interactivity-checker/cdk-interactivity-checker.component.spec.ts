import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkInteractivityCheckerComponent } from './cdk-interactivity-checker.component';

describe('CdkInteractivityCheckerComponent', () => {
  let component: CdkInteractivityCheckerComponent;
  let fixture: ComponentFixture<CdkInteractivityCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkInteractivityCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkInteractivityCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
