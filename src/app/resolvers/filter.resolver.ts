import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../services/company-service';
import { ContractService } from '../services/contract-service';
import { CountryService } from '../services/country-service';
import { DomainService } from '../services/domain-service';
import { JobFilter } from '../../libs/job-lib/job-filter/objects/job-filter';


@Injectable()
export class FilterResolver implements Resolve<JobFilter> {
  constructor(
    public companyService: CompanyService,
    public contractService: ContractService,
    public countryService: CountryService,
    public domainService: DomainService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<JobFilter> {
    return Observable.forkJoin(
      this.companyService.findBy({}),
      this.contractService.findBy({}),
      this.countryService.findBy({}),
      this.domainService.findBy({})
    ).map(values => new JobFilter({
      companies: values[0],
      contracts: values[1],
      countries: values[2],
      domains: values[3],
    }));;
  }
}
