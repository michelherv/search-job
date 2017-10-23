import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

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


@NgModule({
  declarations: [
    AppComponent,
    SearchJobComponent,
    ViewJobComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    JobModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    CompanyService,
    ContractService,
    CountryService,
    DomainService,
    JobService,
    JobResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
