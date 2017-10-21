import { Component } from '@angular/core';
import { JobService } from './services/job-service';
import { Job } from './objects/job';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  job: Job;

  constructor(
    public jobService: JobService
  ) {
    jobService.get('tele-enqueteur-tele-enquetrice-11').subscribe(response => this.job = response);
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
}
