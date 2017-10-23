import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Domain } from '../../libs/job-module/job-thumbnail-horizontal/objects/domain';


@Injectable()
export class DomainService {
  private static URL = '/api/domains';

  constructor(
    private http: Http,
  ) {}

  findBy = (filter: object): Observable<Domain[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.http
      .get(DomainService.URL, new RequestOptions({search: query}))
      .map(response => response.json())
      .map(response => response.map(item => new Domain(item)))
      .catch(error => Observable.throw(error));
  }
}
