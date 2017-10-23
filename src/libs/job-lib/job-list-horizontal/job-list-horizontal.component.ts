import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Job } from '../job-thumbnail-horizontal/objects/job';

@Component({
  selector: 'widget-job-list[thumbnail="true"][horizontal="true"]',
  templateUrl: './job-list-horizontal.component.html',
  styleUrls: ['./job-list-horizontal.component.less']
})
export class JobListHorizontalComponent implements OnInit {
  @Input()
  jobs: Job[];

  @Output()
  onSelect = new EventEmitter<Job>();

  @Output()
  onSave = new EventEmitter<Job>();

  @Output()
  onViewCompany = new EventEmitter<Job>();

  @Output()
  onSelectCompany = new EventEmitter<Job>();

  @Output()
  onReachToBottom = new EventEmitter<void>();

  @HostListener('window:scroll')
  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.onReachToBottom.emit();
    }
  }

  constructor() { }

  ngOnInit() {
  }

  trackBy = (index: number, item: Job) => {
    return item.id;
  }
}
