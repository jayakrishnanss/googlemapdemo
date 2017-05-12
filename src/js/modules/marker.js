import events from './events';
import drawmap from './drawmap';
export default function(location) {
    var position = new google.maps.LatLng(location.latitude, location.longitude),
        map = new google.maps.Map(document.getElementById('map-canvas'), { zoom: location.zoom }),
        markerLocs = [
            { lat: 10.8505, lng: 76.2711, title: 'KL', icon: '../src/images/marker-icon.png' },
            { lat: 28.7041, lng: 77.1025, title: 'ND', icon: '' }
        ],
        markers = [];
    map.setCenter(position);

    $('#add-marker').off().on("click", function() {
        clearMarkers();
        for (var i = 0; i < markerLocs.length; i++) {
            var marker = new google.maps.Marker({
                position: markerLocs[i],
                map: map,
                animation: google.maps.Animation.DROP,
                icon: markerLocs[i].icon,
                draggable: true,
                label: markerLocs[i].title
            });
            markers.push(marker);
        }
    });

    $('#remove-marker').off().on("click", function() {
        clearMarkers();
    });

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }
    events(map);
    drawmap(map);
};
