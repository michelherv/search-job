import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Contract } from '../../libs/job-module/job-thumbnail-horizontal/objects/contract';


@Injectable()
export class ContractService {
  private static URL = '/api/contracts';

  constructor(
    private http: Http,
  ) {}

  findBy = (filter: object): Observable<Contract[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.http
      .get(ContractService.URL, new RequestOptions({search: query}))
      .map(response => response.json())
      .map(response => response.map(item => new Contract(item)))
      .catch(error => Observable.throw(error));
  }
}
