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
}
