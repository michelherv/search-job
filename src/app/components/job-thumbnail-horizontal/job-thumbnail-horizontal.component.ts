import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '../../objects/job';
import * as moment from 'moment';

@Component({
  selector: 'widget-job[thumbnail="true"][horizontal="true"]',
  templateUrl: './job-thumbnail-horizontal.component.html',
  styleUrls: ['./job-thumbnail-horizontal.component.less']
})
export class JobThumbnailHorizontalComponent implements OnInit {
  @Input()
  job: Job;

  @Output()
  onSelect = new EventEmitter<Job>();

  @Output()
  onSave = new EventEmitter<Job>();

  @Output()
  onViewCompany = new EventEmitter<Job>();

  @Output()
  onSelectCompany = new EventEmitter<Job>();

  moment = moment;

  constructor() { }

  ngOnInit() {
  }
}
