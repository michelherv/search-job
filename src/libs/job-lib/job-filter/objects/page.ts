export class Page<T> {
  index: number;
  limit: number;
  total: number;

  constructor(data?: any) {
    data = data || {};
    this.total = data.total;
    this.index = data._page || 1;
    this.limit = data.limit || 10;
  }
}
