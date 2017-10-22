import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Company } from '../objects/company';


@Injectable()
export class CompanyService {
  private static URL = '/api/Companies';

  constructor(
    private http: Http,
  ) {}

  findBy = (filter: object): Observable<Company[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.http
      .get(CompanyService.URL, new RequestOptions({search: query}))
      .map(response => response.json())
      .map(response => response.map(item => new Company(item)))
      .catch(error => Observable.throw(error));
  }
}
