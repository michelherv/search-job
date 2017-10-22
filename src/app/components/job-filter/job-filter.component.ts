import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Contract } from '../../objects/contract';
import { Company } from '../../objects/company';
import { Country } from '../../objects/country';
import { Domain } from '../../objects/domain';
import { Job } from '../../objects/job';
import { JobFilter } from '../../objects/job-filter';


@Component({
  selector: 'widget-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.less']
})
export class JobFilterComponent implements OnInit {
  @Input()
  filter: JobFilter;

  @Input()
  jobApi: (filter: JobFilter) => Observable<Job[]>;

  @Input()
  companyApi: (filter: object) => Observable<Company[]>;

  @Input()
  contractApi: (filter: object) => Observable<Contract[]>;

  @Input()
  countryApi: (filter: object) => Observable<Country[]>;

  @Input()
  domainApi: (filter: object) => Observable<Domain[]>;

  @Output()
  filterChange = new EventEmitter<JobFilter>();

  @Output()
  jobListChange = new EventEmitter<Job[]>();

  @Output()
  onReachToBottom = new EventEmitter<void>();

  @Output()
  onSelect = new EventEmitter<Job>();

  @Output()
  onSave = new EventEmitter<Job>();

  @Output()
  onViewCompany = new EventEmitter<Job>();

  @Output()
  onSelectCompany = new EventEmitter<Job>();

  subscription: Subscription;
  jobs: Job[] = [];
  loading: boolean;

  constructor() { }

  ngOnInit() {
    Observable.forkJoin(
      this.companyApi({}),
      this.contractApi({}),
      this.countryApi({}),
      this.domainApi({})
    ).subscribe((values) => {
      this.filter.companies = values[0];
      this.filter.contracts = values[1];
      this.filter.countries = values[2];
      this.filter.domains = values[3];
      this.loadJobs();
    });
  }

  doFilterChange = (filter: JobFilter) => {
    filter.page.index = 1;
    this.loadJobs();
    this.filterChange.emit(filter);
  }


  doReachToBottom = () => {
    this.filter.page.index++;
    this.loadJobs();
    this.onReachToBottom.emit();
  }

  trackBy = (index: number, item: Contract) => {
    return item.slug;
  }

  loadJobs = () => {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.loading = true;
    this.subscription = this.jobApi(this.filter).subscribe(jobs => {
      if(this.filter.page.index === 1) {
        this.jobs = jobs;
      } else {
        this.jobs.push(...jobs);
      }
      this.jobListChange.emit(this.jobs);
      this.loading = false;
    });
  }
}
