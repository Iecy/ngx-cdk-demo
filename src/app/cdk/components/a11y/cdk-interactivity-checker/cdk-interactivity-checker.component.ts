import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InteractivityChecker } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-interactivity-checker',
  templateUrl: './cdk-interactivity-checker.component.html',
  styleUrls: ['./cdk-interactivity-checker.component.scss']
})
export class CdkInteractivityCheckerComponent implements OnInit {
  @ViewChild('interactivity', { static: true }) button: ElementRef;
  public disable: boolean;
  public visible: boolean;
  public tabbable: boolean;
  public focusable: boolean;

  constructor(private interactivity: InteractivityChecker) { }

  ngOnInit() {
    this.disable = this.interactivity.isDisabled(this.button.nativeElement);
    this.visible = this.interactivity.isVisible(this.button.nativeElement);
    this.tabbable = this.interactivity.isTabbable(this.button.nativeElement);
    this.focusable = this.interactivity.isFocusable(this.button.nativeElement);
  }

}
