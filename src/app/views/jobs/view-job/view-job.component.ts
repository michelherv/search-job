import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Job } from '../../../../libs/job-lib/job-thumbnail-horizontal/objects/job';


@Component({
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.less']
})
export class ViewJobComponent implements OnInit {
  job: Job;

  constructor(
    public location: Location,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.job = data.job);
  }

  doBack = () => {
    this.location.back();
  }
}
