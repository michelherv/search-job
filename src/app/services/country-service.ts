import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Country } from '../../libs/job-lib/job-thumbnail-horizontal/objects/country';


@Injectable()
export class CountryService {
  private static URL = '/api/countries';

  constructor(
    private httpClient: HttpClient,
  ) {}

  findBy = (filter: object): Observable<Country[]> => {
    const query = Object.keys(filter).map(key => key + '=' + filter[key]).join('&');

    return this.httpClient
      .get<object[]>(`${CountryService.URL}?${query}`)
      .pipe(
        map(response => response.map(item => new Country(item))),
        catchError(error => throwError(error))
      );
  }
}
