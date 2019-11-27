import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexRouterComponent } from './index-router.component';

describe('IndexRouterComponent', () => {
  let component: IndexRouterComponent;
  let fixture: ComponentFixture<IndexRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexRouterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
