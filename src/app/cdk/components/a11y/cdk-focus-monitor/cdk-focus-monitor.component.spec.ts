import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkFocusMonitorComponent } from './cdk-focus-monitor.component';

describe('CdkFocusMonitorComponent', () => {
  let component: CdkFocusMonitorComponent;
  let fixture: ComponentFixture<CdkFocusMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkFocusMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkFocusMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
