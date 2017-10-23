import { Component, OnInit } from '@angular/core';
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
  filter: JobFilter = new JobFilter();

  constructor(
    public companyService: CompanyService,
    public contractService: ContractService,
    public countryService: CountryService,
    public domainService: DomainService,
    public jobService: JobService,
  ) {}

  ngOnInit() {}

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
