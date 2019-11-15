import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import { FocusMonitor, FocusOrigin, FocusTrapFactory } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-focus-monitor',
  templateUrl: './cdk-focus-monitor.component.html',
  styleUrls: ['./cdk-focus-monitor.component.scss']
})
export class CdkFocusMonitorComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('monitor_one', {static: true}) monitorOne: ElementRef<HTMLElement>;
  @ViewChild('element', { static: true }) element: ElementRef<HTMLElement>;
  @ViewChild('subtree', {static: true}) subtree: ElementRef<HTMLElement>;

  @ViewChild('monitor_tow', {static: true}) monitorTwo: ElementRef<HTMLElement>;
  @ViewChild('monitored', {static: true}) monitored: ElementRef<HTMLElement>;
  @ViewChild('unmonitored', {static: true}) unmonitored: ElementRef<HTMLElement>;

  public elementOrigin = this.formatOrigin(null);
  public subtreeOrigin = this.formatOrigin(null);

  public monitoredOrigin = this.formatOrigin(null);

  public simulatedFocus = 'mouse';
  constructor(
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private focusFactory: FocusTrapFactory,
  ) { }

  ngOnInit() {
    this.focusMonitor.monitor(this.element)
      .subscribe(origin => this.ngZone.run(() => {
        this.elementOrigin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
    this.focusMonitor.monitor(this.subtree, true)
      .subscribe(origin => this.ngZone.run(() => {
        this.subtreeOrigin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
    this.focusMonitor.monitor(this.monitored)
      .subscribe(origin => this.ngZone.run(() => {
        this.monitoredOrigin = this.formatOrigin(origin);
        this.cdr.markForCheck();
      }));
  }

  ngAfterViewInit(): void {
    this.focusFactory.create(this.monitorOne.nativeElement);
    this.focusFactory.create(this.monitorTwo.nativeElement);
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
    this.focusMonitor.stopMonitoring(this.monitored);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }
}
