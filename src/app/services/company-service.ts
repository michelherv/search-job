import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company } from '../../libs/job-lib/job-thumbnail-horizontal/objects/company';


@Injectable()
export class CompanyService {
  private static URL = '/api/Companies';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findBy = (filter: object): Observable<Company[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.httpClient
      .get<object[]>(`${CompanyService.URL}?${query}`)
      .pipe(
        map(response => response.map(item => new Company(item))),
        catchError(error => throwError(error))
      );
  }
}
