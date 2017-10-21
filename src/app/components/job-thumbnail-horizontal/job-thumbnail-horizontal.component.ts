import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../objects/job';
import * as moment from 'moment';

@Component({
  selector: 'widget-job[thumbnail="true"][horizontal="true"]',
  templateUrl: './job-thumbnail-horizontal.component.html',
  styleUrls: ['./job-thumbnail-horizontal.component.less']
})
export class JobThumbnailHorizontalComponent implements OnInit {
  @Input() job: Job;

  moment = moment;

  constructor() { }

  ngOnInit() {
  }
}
