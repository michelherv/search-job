import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { JobService } from '../../../services/job-service';
import { JobFilter } from '../../../../libs/job-lib/job-filter/objects/job-filter';
import { Job } from '../../../../libs/job-lib/job-thumbnail-horizontal/objects/job';


@Component({
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.less']
})
export class SearchJobComponent implements OnInit {
  filter: JobFilter;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public jobService: JobService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.filter = data.filter);
  }

  doFilterChange = (filter: JobFilter) => {
    console.log('filter changed...');
  }

  doJobListChange = (job: Job) => {
    console.log('Job list changed...');
  }

  doReachToBottom = () => {
    console.log('Reached to bottom...');
  }

  doSelect = (job: Job) => {
    console.log('Selected job...');
    this.router.navigate([job.id], {relativeTo: this.route});
  }

  doSave = (job: Job) => {
    console.log('Saved job...');
  }

  doViewCompany = (job: Job) => {
    console.log('Viewed company...');
  }

  doSelectCompany = (job: Job) => {
    console.log('Selected company...');
  }
}
