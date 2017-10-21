import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Country } from '../objects/country';


@Injectable()
export class JobService {
  private static URL = '/api/countries';

  constructor(
    private http: Http,
  ) { }

  findBy = (filter: object): Observable<Country[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.http
      .get(JobService.URL, new RequestOptions({ search: query }))
      .map(response => response.json())
      .map(response => response.map(item => new Country(item)))
      .catch(error => Observable.throw(error));
  }
}
