import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'


window['__map__'] = L.map('map', {  // tslint:disable-line
    center: [0, 0],
    zoom: 5,
    layers: [
        L.tileLayer('/basemaps/wmts/1.0.0/osm/webmercator/{z}/{x}/{y}.png'),
    ],
})


fetch('/api/')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#api').textContent = 'Response from /api/:\n\n' + JSON.stringify(data, null, 4)
    })
