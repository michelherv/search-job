import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobFilter } from '../../objects/job-filter';
import { Contract } from '../../objects/contract';


@Component({
  selector: 'widget-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.less']
})
export class JobFilterComponent implements OnInit {
  @Input()
  filter: JobFilter;

  @Output()
  filterChange = new EventEmitter<JobFilter>()

  constructor() { }

  ngOnInit() {}

  trackBy = (index: number, item: Contract) => {
    return item.slug;
  }
}
