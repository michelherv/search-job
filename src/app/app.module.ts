import {HttpClientModule} from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyService } from './services/company-service';
import { ContractService } from './services/contract-service';
import { CountryService } from './services/country-service';
import { DomainService } from './services/domain-service';
import { JobService } from './services/job-service';
import { JobModule } from '../libs/job-lib/job.module';

import { SearchJobComponent } from './views/jobs/search-job/search-job.component';
import { ViewJobComponent } from './views/jobs/view-job/view-job.component';
import { AppRoutingModule } from './app-routing.module';
import { JobResolver } from './resolvers/job.resolver';
import { FilterResolver } from './resolvers/filter.resolver';


@NgModule({
  declarations: [
    AppComponent,
    SearchJobComponent,
    ViewJobComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    JobModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    CompanyService,
    ContractService,
    CountryService,
    DomainService,
    JobService,
    JobResolver,
    FilterResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
