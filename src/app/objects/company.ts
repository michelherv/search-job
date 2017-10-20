export class Company {
  id: string;
  slug: string;
  name: string;

  constructor(data?: any) {
    data = data || {};
    this.id = data.id || '';
    this.slug = data.slug || '';
    this.name = data.name || '';
  }
}
