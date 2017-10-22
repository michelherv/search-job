import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './services/contract-service';
import { CompanyService } from './services/company-service';
import { CountryService } from './services/country-service';
import { DomainService } from './services/domain-service';
import { JobService } from './services/job-service';
import { JobFilter } from './objects/job-filter';
import { Job } from './objects/job';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  subscription: Subscription;
  loading: boolean;
  filter: JobFilter;
  jobs: Job[] = [];

  constructor(
    public companyService: CompanyService,
    public contractService: ContractService,
    public countryService: CountryService,
    public domainService: DomainService,
    public jobService: JobService,
  ) {}

  ngOnInit() {
    Observable.forkJoin(
      this.companyService.findBy({}),
      this.contractService.findBy({}),
      this.countryService.findBy({}),
      this.domainService.findBy({})
    ).subscribe((values) => {
      this.filter = new JobFilter({
        companies: values[0],
        contracts: values[1],
        countries: values[2],
        domains: values[3]
      });

      this.loading = true;
      this.subscription = this.jobService
        .findBy(this.filter)
        .subscribe(jobs => {
          this.jobs = jobs;
          this.loading = false;
        });
    });
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

    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }

    this.filter.page.index++;
    this.loading = true;
    this.subscription = this.jobService
      .findBy(this.filter)
      .subscribe(jobs => {
        this.jobs.push(...jobs);
        this.loading = false;
      });
  }

  doFilterChange = (filter: JobFilter) => {
    console.log('filter change', filter);

    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }

    filter.page.index = 1;
    this.loading = true;
    this.subscription = this.jobService
      .findBy(filter)
      .subscribe(jobs => {
        this.jobs = jobs;
        this.loading = false;
      });
  }
}
