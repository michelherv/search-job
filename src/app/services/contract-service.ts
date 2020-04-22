import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Contract } from '../../libs/job-lib/job-thumbnail-horizontal/objects/contract';


@Injectable()
export class ContractService {
  private static URL = '/api/contracts';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findBy = (filter: object): Observable<Contract[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.httpClient
      .get<object[]>(`${ContractService.URL}?${query}`)
      .pipe(
        map(response => response.map(item => new Contract(item))),
        catchError(error => throwError(error))
      );
  }
}
