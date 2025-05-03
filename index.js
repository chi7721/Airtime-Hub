$(".window").draggable();
var json =  {
    "themepark_1": {
        "name": "Cedar Point",
        "location": "Sandusky, Ohio",
        "coordinates": [41.4813, -82.6695],
        "coasters": [
            {
                "name": "Blue Streak"
            },
            {
                "name": "Cedar Creek Mine Ride"
            },
            {
                "name": "Corkscrew"
            },
            {
                "name": "Gatekeeper"
            },
            {
                "name": "Gemini"
            },
            {
                "name": "Iron Dragon"
            },
            {
                "name": "Magnum XL-200"
            },
            {
                "name": "Maverick"
            },
            {
                "name": "Millennium Force"
            },
            {
                "name": "Raptor"
            },
            {
                "name": "Rougarou"
            },
            {
                "name": "Steel Vengeance"
            },
            {
                "name": "Valravn"
            },
            {
                "name": "Wild Mouse"
            },
            {
                "name": "Woodstock Express"
            },
            {
                "name": "Wilderness Run"
            }
        ]
    },
    "themepark_2": {
        "name": "Six Flags Great Adventure",
        "location": "Jackson, New Jersey",
        "coordinates": [40.1354, -74.4262],
        "coasters": [
            {
                "name": "Batman: The Ride"
            },
            {
                "name": "Dark Knight"
            },
            {
                "name": "El Toro"
            },
            {
                "name": "Flash: Vertical Velocity"
            },
            {
                "name": "Harley Quinn Crazy Train"
            },
            {
                "name": "Jersey Devil Coaster"
            },
            {
                "name": "Medusa"
            },
            {
                "name": "Nitro"
            },
            {
                "name": "Runaway Mine Train"
            },
            {
                "name": "Skull Mountain"
            },
            {
                "name": "Superman: Ultimate Flight"
            }
        ]
    },
    "themepark_3": {
        "name": "Islands of Adventure",
        "location": "Orlando, Florida",
        "coordinates": [28.4747, -81.4675],
        "coasters": [
            {
                "name": "Flight of the Hippogriff"
            },
            {
                "name": "Hagrid's Magical Creatures Motorbike Adventure"
            },
            {
                "name": "Increadible Hulk Coaster"
            },
            {
                "name": "Pteranodon Flyers"
            }
        ]
    },
    "themepark_4": {
        "name": "Walibi Holland",
        "location": "Biddinghuizen, Netherlands",
        "coordinates": [52.4275, 5.4722],
        "coasters": [
            {
                "name": "Condor"
            },
            {
                "name": "Drako"
            },
            {
                "name": "Eat My Dust"
            },
            {
                "name": "Goliath"
            },
            {
                "name": "Lost Gravity"
            },
            {
                "name": "Speed of Sound"
            },
            {
                "name": "Untamed"
            },
            {
                "name": "Xpress: Platform 13"
            },
            {
                "name": "YoY"
            }
        ]
    },
    "themepark_5": {
        "name": "Tokyo Disneyland",
        "location": "Urayasu, Chiba, Japan",
        "coordinates": [35.6329, 139.8804],
        "coasters": [
            {
                "name": "Big Thunder Mountain"
            },
            {
                "name": "Gadget's Go Coaster"
            }
        ]
    }
};
var jsonString = JSON.stringify(json);
var jsonCoasters = JSON.parse(jsonString);
console.log(jsonCoasters.themepark_1.name);
var map = L.map('map').setView([0, 0], 3);

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
var placeMarker = function(lat, lng) {
    var marker = L.marker([lat, lng], {
        icon: customIcon
    }).addTo(map);
    console.log($(markerTemplate).prop('outerHTML'));
};
for (var i = 0; i < Object.keys(jsonCoasters).length; i++) {
    var themepark = jsonCoasters["themepark_" + (i + 1)];
    var parkName = themepark.name;
    var coordinates = themepark.coordinates;
    placeMarker(coordinates[0], coordinates[1]);
}
$(".vector-parent").on('click', function() {
    console.log('Marker clicked');
});