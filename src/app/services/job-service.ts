import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Job } from '../objects/job';
import { Page } from '../objects/page';
import { JobFilter } from '../objects/job-filter';


@Injectable()
export class JobService {
  private static URL = '/api/jobs';

  constructor(
    private http: Http,
  ) {}

  findBy = (filter: JobFilter): Observable<Job[]> => {
    return this.http
      .get(JobService.URL, new RequestOptions({ search: filter.toQueryString() }))
      .map(response => response.json())
      .map(response => response.map(item => new Job(item)))
      .catch(error => Observable.throw(error));
  }

  get = (id: string): Observable<Job> => {
    return this.http
      .get(`${JobService.URL}/${id}`)
      .map(response => response.json())
      .map(response => new Job(response))
      .catch(error => Observable.throw(error));
  }

  remove = (id: string): Observable<void> => {
    return this.http
      .delete(`${JobService.URL}/${id}`)
      .catch(error => Observable.throw(error));
  }

  save = (job: Job): Observable<Job> => {
    let request: Observable<Response>;

    if (job.id) {
      request = this.http.put(`${JobService.URL}/${job.id}`, job);
    } else {
      request = this.http.post(`${JobService.URL}`, job);
    }

    return request
      .map(response => response.json())
      .map(response => new Job(response))
      .catch(error => Observable.throw(error));
  }
}
