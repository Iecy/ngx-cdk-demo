import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-cdk-live-announcer',
  templateUrl: './cdk-live-announcer.component.html',
  styleUrls: ['./cdk-live-announcer.component.scss'],
})
export class CdkLiveAnnouncerComponent implements OnInit {
  index = 0;
  constructor(private liveService: LiveAnnouncer) {
    this.liveService.announce(`hello google ${this.index}`);
    setTimeout(() => this.taskTimer(), 3000);
  }

  ngOnInit() {
  }

  public taskTimer(): void {
    this.index += 1;
    this.liveService.announce(`晚安, google ${this.index}`, 'off');
  }
}
