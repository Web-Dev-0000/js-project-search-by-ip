import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addOffset, getAddress, addTileLayer, validatIp} from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [45.033, 38.97], // Краснодар (по умолчанию)
    zoom: 13,
    zoomControl: false,
});
addTileLayer(map); // Параметры карты


// Поулчает данные по введённому IP и выводит в DOM
function getData() {
    if (validatIp(ipInput.value)) {
        getAddress(ipInput.value)
            .then(setInfo) // Отрисовка в DOM
    }
}

function handleKey(e) {
    if (e.key === 'Enter') {
        getData();
    }
}

// Отрисовка в DOM
function setInfo(mapData) { 
    // console.log(mapData.location)
    const {lat, lng, country, region, city, timezone} = mapData.location;

    ipInfo.innerText = mapData.ip;
    locationInfo.innerText = `${country  === undefined ? '' : country} ${region  === undefined ? '' : region} ${city === undefined ? '' : city}`;
    timezoneInfo.innerText = timezone;
    ispInfo.innerText = mapData.isp;

    // Смещение карты по широте и долготе (из mapData.location)
    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);
  
    // Адаптив
    if (matchMedia("(max-width: 1023px)").matches) {
        addOffset(map);
    }
}
