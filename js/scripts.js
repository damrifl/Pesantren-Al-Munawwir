// Token Mapbox Anda
mapboxgl.accessToken = 'pk.eyJ1IjoiZGltYXJsYWtzb25vIiwiYSI6ImNtYjZobTFoNzAxNXIyanNocXBmbXd5cWoifQ.navtVBVpp-0LhiLj8Dw65Q';

// Inisialisasi peta
const map = new mapboxgl.Map({
    container: 'map', // ID dari elemen HTML
    style: 'mapbox://styles/mapbox/streets-v11', // Gaya peta
    center: [100.68925, -7.64914], // Koordinat awal sesuai gambar
    zoom: 15 // Level zoom awal
});

// Tambahkan kontrol navigasi (zoom, compass)
map.addControl(new mapboxgl.NavigationControl(), 'top-left');

// Tambahkan Directions API ke peta
const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving',
    controls: {
        inputs: true,
        instructions: false // Sembunyikan instruksi rute
    }
});
map.addControl(directions, 'top-right');

// Tambahkan marker untuk lokasi pesantren
const pesantrenLocation = [100.68925, -7.64914]; // Koordinat Pondok Pesantren
const pesantrenMarker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(pesantrenLocation)
    .setPopup(new mapboxgl.Popup().setHTML("<h4>Pondok Pesantren Al-Munawwir</h4>"))
    .addTo(map);

// Tambahkan marker untuk lokasi pengguna (Titik A)
const userLocation = [100.68925, -7.64914]; // Koordinat titik A
const userMarker = new mapboxgl.Marker({ color: 'blue' })
    .setLngLat(userLocation)
    .setPopup(new mapboxgl.Popup().setHTML("<h4>Lokasi Anda (A)</h4>"))
    .addTo(map);

// Atur titik awal rute secara otomatis
map.on('load', function() {
    directions.setOrigin(userLocation);
});