import { Point } from './point';


export class City {
    city_place_id: string;
    display_value: string;
    city: string;
    address: string;
    zip_code: string;
    department: string;
    department_short: string;
    state: string;
    state_short: string;
    country: string;
    country_short: string;
    points: {
        center?: Point;
        [property: string]: Point;
    };
    geo: Point;
    extra: string[];
    type: string;
    types: string[];

    constructor(data?: any) {
        data = data || {};
        this.city_place_id = data.city_place_id || '';
        this.display_value = data.display_value || '';
        this.city = data.city || '';
        this.address = data.address || '';
        this.zip_code = data.zip_code;
        this.department = data.department || '';
        this.department_short = data.department_short || '';
        this.state = data.state || '';
        this.state_short = data.state_short || '';
        this.country = data.country || '';
        this.country_short = data.country_short || '';
        this.points = {};
        for(let i = 0, keys = Object.keys(data.points || {}); i < keys.length; i++) {
          this.points[keys[i]] = new Point(data.points[keys[i]]);
        }
        this.geo = data.geo ? new Point(data.geo) : null;
        this.extra = data.extra || {};
        this.type = data.type || '';
        this.types = data.types || [];
    }
}
