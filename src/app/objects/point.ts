export class Point {
    lat: number;
    lon: number;

    constructor(data?: any) {
        data = data || {};
        this.lat = data.lat || 0;
        this.lon = data.lon || 0;
    }
}
