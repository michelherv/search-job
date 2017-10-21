export class Domain {
  slug: string;
  title: string;

  constructor(data?: any) {
    data = data || {};
    this.slug = data.slug || '';
    this.title = data.title || '';
  }
}
