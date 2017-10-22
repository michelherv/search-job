import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobThumbnailHorizontalComponent } from './components/job-thumbnail-horizontal/job-thumbnail-horizontal.component';
import { JobListHorizontalComponent } from './components/job-list-horizontal/job-list-horizontal.component';
import { JobFilterComponent } from './components/job-filter/job-filter.component';
import { CompanyService } from './services/company-service';
import { ContractService } from './services/contract-service';
import { CountryService } from './services/country-service';
import { DomainService } from './services/domain-service';
import { JobService } from './services/job-service';


@NgModule({
  declarations: [
    AppComponent,
    JobThumbnailHorizontalComponent,
    JobListHorizontalComponent,
    JobFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    CompanyService,
    ContractService,
    CountryService,
    DomainService,
    JobService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
