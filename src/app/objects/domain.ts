export class Domain {
  slug: string;
  title: string;
  enabled: boolean;

  constructor(data?: any) {
    data = data || {};
    this.slug = data.slug || '';
    this.title = data.title || '';
    this.enabled = !!data.enabled;
  }
}
