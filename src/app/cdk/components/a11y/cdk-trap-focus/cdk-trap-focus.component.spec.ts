import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTrapFocusComponent } from './cdk-trap-focus.component';

describe('CdkTrapFocusComponent', () => {
  let component: CdkTrapFocusComponent;
  let fixture: ComponentFixture<CdkTrapFocusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkTrapFocusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkTrapFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
