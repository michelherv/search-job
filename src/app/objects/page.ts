export class Page<T> {
  items: T[];
  index: number;
  first: number;
  prev: number;
  next: number;
  last: number;
  limit: number;
  total: number;

  constructor(data?: any) {
    this.total = data.total;
    this.items = data.items;
    this.index = data._page;
    this.limit = data.limit;

    for(const link of data.links) {
      const parts = link.split('; ');
      const value = +parts[0].split('?')[1].split('&')[0].split('=')[1];
      const field = parts[1].split('"')[1];
      this[field] = value;
    }
  }
}
