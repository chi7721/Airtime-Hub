$(".window").draggable();

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerTemplate = document.getElementById('marker-template').innerHTML;
var customIcon = L.divIcon({
    className: 'vector-parent',
    html: markerTemplate,
    iconSize: [21.3, 27],
    iconAnchor: [10.65, 27]
});
L.marker([54, 0], {
    icon: customIcon
}).addTo(map);