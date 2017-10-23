import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContractService } from './services/contract-service';
import { CompanyService } from './services/company-service';
import { CountryService } from './services/country-service';
import { DomainService } from './services/domain-service';
import { JobService } from './services/job-service';
import { JobFilter } from '../libs/job-lib/job-filter/objects/job-filter';
import { Job } from '../libs/job-lib/job-thumbnail-horizontal/objects/job';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  filter: JobFilter;

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
    ).subscribe((values) => this.filter = new JobFilter({
      companies: values[0],
      contracts: values[1],
      countries: values[2],
      domains: values[3],
    }));
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
