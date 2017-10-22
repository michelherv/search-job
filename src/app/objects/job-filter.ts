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

  toQueryString = (): string => {
    let queryString = `${this.page.toQueryString()}`;

    queryString = queryString + (this.keywords.trim() ? `&q=${this.keywords}` : '');
    queryString = queryString + (this.location.trim() ? `&location.city=${this.location}` : '');

    queryString = queryString + '&' + this.transform('contract.slug', this.contracts);
    queryString = queryString + '&' + this.transform('raw_domain', this.domains);
    queryString = queryString + '&' + this.transform('location.country_short', this.countries);
    queryString = queryString + '&' + this.transform('company.slug', this.companies);

    return queryString;
  }

  private transform = (key: string, items: (Contract | Domain | Country | Company)[]) => {
    return (items || [])
      .filter(item => item.enabled)
      .map(item => `${key}=${item.slug}`)
      .join('&');
  }
}
