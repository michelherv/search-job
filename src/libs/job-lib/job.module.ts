import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { JobThumbnailHorizontalComponent } from './job-thumbnail-horizontal/job-thumbnail-horizontal.component';
import { JobListHorizontalComponent } from './job-list-horizontal/job-list-horizontal.component';
import { JobFilterComponent } from './job-filter/job-filter.component';


@NgModule({
  declarations: [
    JobThumbnailHorizontalComponent,
    JobListHorizontalComponent,
    JobFilterComponent,
  ],
  exports: [
    JobThumbnailHorizontalComponent,
    JobListHorizontalComponent,
    JobFilterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class JobModule { }
