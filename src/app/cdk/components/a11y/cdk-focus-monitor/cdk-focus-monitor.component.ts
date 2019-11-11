import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, NgZone, OnDestroy } from '@angular/core';
import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-focus-monitor',
  templateUrl: './cdk-focus-monitor.component.html',
  styleUrls: ['./cdk-focus-monitor.component.scss']
})
export class CdkFocusMonitorComponent implements OnInit, OnDestroy {
  @ViewChild('element', { static: true }) element: ElementRef<HTMLElement>;
  @ViewChild('subtree', {static: true}) subtree: ElementRef<HTMLElement>;

  public elementOrigin = this.formatOrigin(null);
  public subtreeOrigin = this.formatOrigin(null);
  constructor(
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
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
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.element);
    this.focusMonitor.stopMonitoring(this.subtree);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }
}
