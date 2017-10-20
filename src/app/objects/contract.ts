export class Contract {
  slug: string;
  title: string;
  title_short: string;
  computed_title: string;

  constructor(data?: any) {
    data = data || {};
    this.slug = data.slug || '';
    this.title = data.title || '';
    this.title_short = data.title_short || '';
    this.computed_title = data.computed_title || '';
  }
}
