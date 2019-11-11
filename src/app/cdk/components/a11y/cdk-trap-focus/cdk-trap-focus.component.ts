import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { FocusMonitor, FocusTrapFactory } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-trap-focus',
  templateUrl: './cdk-trap-focus.component.html',
  styleUrls: ['./cdk-trap-focus.component.scss']
})
export class CdkTrapFocusComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private focusFactory: FocusTrapFactory,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // this.focusMonitor.monitor(this.elementRef, true).subscribe(mode => {
    //   console.log(mode, 'this is after view init.');
    // });
    this.focusFactory.create(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    // this.focusMonitor.stopMonitoring(this.elementRef);
  }

}
