import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Domain } from '../../libs/job-lib/job-thumbnail-horizontal/objects/domain';


@Injectable()
export class DomainService {
  private static URL = '/api/domains';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findBy = (filter: object): Observable<Domain[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.httpClient
      .get<object[]>(`${DomainService.URL}?${query}`)
      .pipe(
        map(response => response.map(item => new Domain(item))),
        catchError(error => throwError(error))
      );
  }
}
