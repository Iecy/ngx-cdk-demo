import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkLiveAnnouncerComponent } from './cdk-live-announcer.component';

describe('CdkLiveAnnouncerComponent', () => {
  let component: CdkLiveAnnouncerComponent;
  let fixture: ComponentFixture<CdkLiveAnnouncerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkLiveAnnouncerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkLiveAnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
