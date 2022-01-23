import L from 'leaflet';

// Параметры из документации карты (+ мой токен и атрибуты): 
export function addTileLayer(map) { 
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuaW9yMjMzMyIsImEiOiJja3lydWNraHgweGVnMndvNWRqMnBheTJjIn0.dVMP32fx-kDYRl7t1pEh1Q', {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="mailto:aa.webdev00@gmail.com">Dudchenko</a> | <a href="https://github.com/Web-Dev-0000?tab=repositories"> My Github </a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // accessToken: 'pk.eyJ1IjoianVuaW9yMjMzMyIsImEiOiJja3lydWNraHgweGVnMndvNWRqMnBheTJjIn0.dVMP32fx-kDYRl7t1pEh1Q'
    }).addTo(map);
}