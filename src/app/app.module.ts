import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JobService } from './services/job-service';
import { JobThumbnailHorizontalComponent } from './components/job-thumbnail-horizontal/job-thumbnail-horizontal.component';


@NgModule({
  declarations: [
    AppComponent,
    JobThumbnailHorizontalComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    JobService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
