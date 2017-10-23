import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompanyService } from './services/company-service';
import { ContractService } from './services/contract-service';
import { CountryService } from './services/country-service';
import { DomainService } from './services/domain-service';
import { JobService } from './services/job-service';
import { JobModule } from './modules/job-module/job.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
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
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
