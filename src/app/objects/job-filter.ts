import { Contract } from './contract';
import { Domain } from './domain';
import { Country } from './country';
import { Company } from './company';
import { Page } from './page';
import { Job } from './job';


export class JobFilter {
  keywords: string;
  location: string;
  contracts: Contract[];
  domains: Domain[];
  countries: Country[];
  companies: Company[];
  page: Page<Job>;

  constructor(data?: any) {
    data = data || {};
    this.keywords = data.keywords || '';
    this.location = data.location || '';
    this.contracts = (data.contracts || []).map(item => new Contract(item));
    this.domains = (data.domains || []).map(item => new Domain(item));
    this.countries = (data.countries || []).map(item => new Country(item));
    this.companies = (data.companies || []).map(item => new Company(item));
    this.page = new Page<Job>(data.page);
  }
}
