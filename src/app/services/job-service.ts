import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Job } from '../objects/job';
import { Page } from '../objects/page';


@Injectable()
export class JobService {
  private static URL = '/api/jobs';

  constructor(
    private http: Http,
  ) { }

  findBy = (filter: object): Observable<Page<Job>> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.http
      .get(JobService.URL, new RequestOptions({ search: query }))
      .map(response => {
        return new Page({
          ...filter,
          items: response.json().map(item => new Job(item)),
          total: +response.headers.get('x-total-count'),
          links: response.headers.get('link').split(', ')
        });
      })
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
