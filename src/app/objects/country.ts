export class Country {
  slug: string;
  title: string;

  constructor(data?: any) {
    data = data || {};
    this.slug = data.slug || '';
    this.title = data.title || '';
  }
}
