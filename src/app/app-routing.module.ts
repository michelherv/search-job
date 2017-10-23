import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchJobComponent } from './views/jobs/search-job/search-job.component';
import { ViewJobComponent } from './views/jobs/view-job/view-job.component';
import { JobResolver } from './resolvers/job.resolver';


const routes: Routes = [
  {
    path: 'jobs',
    component: SearchJobComponent
  }, {
    path: 'jobs/:id',
    component: ViewJobComponent,
    resolve: {
      job: JobResolver
    }
  }, {
    path: '',
    redirectTo: 'jobs',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
