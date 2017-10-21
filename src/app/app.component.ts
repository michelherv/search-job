import { Component } from '@angular/core';
import { JobService } from './services/job-service';
import { Job } from './objects/job';
import { Page } from './objects/page';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobs: Job[] = [];

  constructor(
    public jobService: JobService
  ) {
    jobService.findBy({
      _page: 2,
    }).subscribe(response => this.jobs.push(...response.items));
  }

  doSelect = (job: Job) => {
    console.log('Selected job', job);
  }

  doSave = (job: Job) => {
    console.log('Saved job', job);
  }

  doViewCompany = (job: Job) => {
    console.log('Viewed company', job.company);
  }

  doSelectCompany = (job: Job) => {
    console.log('Selected company', job.company);
  }

  doReachToBottom = () => {
    console.log('Reached to bottom...');
  }
}
