"use strict";
// // // // // console.log('TS Hello world!');
class LocationApp {
    apiKey;
    map;
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.map = this.initMap();
    }
    initMap() {
        return new google.maps.Map(document.getElementById('map'), { zoom: 13, center: { lat: 12.9716, lng: 77.5946 } } // Bengaluru
        );
    }
    async geocode(address) {
        const params = new URLSearchParams({ address, key: this.apiKey });
        const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${params}`);
        const data = await res.json();
        if (data.status !== 'OK')
            throw new Error(`Geocoding failed: ${data.status}`);
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
    }
    async searchAndShow(address) {
        const coords = await this.geocode(address);
        this.map.setCenter(coords);
        new google.maps.Marker({ position: coords, map: this.map, title: address });
    }
}
const app = new LocationApp(process.env.MAPS_API_KEY);
document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('addressInput');
    try {
        await app.searchAndShow(input.value);
    }
    catch (err) {
        alert(err instanceof Error ? err.message : 'Search failed');
    }
});
