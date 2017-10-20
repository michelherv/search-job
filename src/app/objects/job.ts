import { City } from './city';
import { Company } from './company';
import { Contract } from './contract';
import { Degree } from './degree';


export class Job {
  id: string; // _id ==> id
  domain: string; // domaine ==> domain
  title: string;
  raw_domain: string;
  state: string;
  source: string;
  source_type: string;
  external_url: string;
  bookmarked: boolean; // is_bookmarked ==> bookmarked
  viewed: boolean; // is_viewed ==> viewed
  applied: boolean; // is_applied ==> applied
  newed: boolean; // is_new ==> newed
  online: boolean; // online ==> onlined
  start_date: Date;
  date_created: Date;
  location: City;
  company: Company;
  contract: Contract;
  required_degree: Degree;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.domain = data.domain || '';
    this.title = data.title || '';
    this.raw_domain = data.raw_domain || '';
    this.state = data.state || '';
    this.source = data.source || '';
    this.source_type = data.source_type || '';
    this.external_url = data.external_url || '';
    this.bookmarked = !!data.bookmarked;
    this.viewed = !!data.viewed;
    this.applied = !!data.applied;
    this.newed = !!data.newed;
    this.online = !!data.online;
    this.start_date = data.start_date ? new Date(data.start_date): null;
    this.date_created = data.date_created ? new Date(data.date_created): null;
    this.location = data.location ? new City(data.location): null;
    this.company = data.company ? new Company(data.company): null;
    this.contract = data.contract ? new Contract(data.contract): null;
    this.required_degree = data.required_degree ? new Degree(data.required_degree): null;
  }
}

