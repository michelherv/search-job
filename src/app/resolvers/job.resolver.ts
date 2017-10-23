import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JobService } from '../services/job-service';
import { Job } from '../../libs/job-lib/job-thumbnail-horizontal/objects/job';


@Injectable()
export class JobResolver implements Resolve<Job> {
  constructor(
    public jobService: JobService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job> {
    return this.jobService.get(route.params.id);
  }
}
