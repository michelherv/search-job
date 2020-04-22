import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Job } from '../../libs/job-lib/job-thumbnail-horizontal/objects/job';
import { JobFilter } from '../../libs/job-lib/job-filter/objects/job-filter';
import { Contract } from '../../libs/job-lib/job-thumbnail-horizontal/objects/contract';
import { Domain } from '../../libs/job-lib/job-thumbnail-horizontal/objects/domain';
import { Country } from '../../libs/job-lib/job-thumbnail-horizontal/objects/country';
import { Company } from '../../libs/job-lib/job-thumbnail-horizontal/objects/company';


@Injectable()
export class JobService {
  private static URL = '/api/jobs';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findBy = (filter: JobFilter): Observable<Job[]> => {
    return this.httpClient
      .get<object[]>(`${JobService.URL}?${this.toQueryString(filter)}`)
      .pipe(
        map(response => response.map(item => new Job(item))),
        catchError(error => throwError(error))
      );
  }

  get = (id: string): Observable<Job> => {
    return this.httpClient
      .get(`${JobService.URL}/${id}`)
      .pipe(
        map(response => new Job(response)),
        catchError(error => throwError(error))
      );
  }

  private toQueryString = (filter: JobFilter): string => {
    let queryString = `_page=${filter.page.index}&_limit=${filter.page.limit}`;

    queryString = queryString + (filter.keywords.trim() ? `&q=${filter.keywords}` : '');
    queryString = queryString + (filter.location.trim() ? `&location.city=${filter.location}` : '');

    queryString = queryString + '&' + this.transform('contract.slug', filter.contracts);
    queryString = queryString + '&' + this.transform('raw_domain', filter.domains);
    queryString = queryString + '&' + this.transform('location.country_short', filter.countries);
    queryString = queryString + '&' + this.transform('company.slug', filter.companies);

    return queryString;
  }

  private transform = (key: string, items: (Contract | Domain | Country | Company)[]) => {
    return (items || [])
      .filter(item => item.enabled)
      .map(item => `${key}=${item.slug}`)
      .join('&');
  }
}
