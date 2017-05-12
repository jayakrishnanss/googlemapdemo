export default function(map) {
    var markerLocs = [
            { lat: 38.889931, lng: -77.009003, name: 'Washington, D.C.' },
            { lat: 40.730610, lng: -73.935242, name: 'New York City' }
        ],
        bounds = new google.maps.LatLngBounds(),
        markers = [];

    $('#events').off().on("click", function() {
        clearMarkers();
        for (var i = 0; i < markerLocs.length; i++) {
            var marker = new google.maps.Marker({
                position: markerLocs[i],
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true
            });
            markers.push(marker);
            bounds.extend(markerLocs[i]);
            // Using closures in event listeners
            setInfoWindow(marker, markerLocs[i].name);
        }
        map.fitBounds(bounds); // Center map to cover all visible Markers
    });

    function setInfoWindow(marker, title) {
        var infowindow = new google.maps.InfoWindow({
            content: title
        });

        marker.addListener('click', function() { // Simple click event
            infowindow.open(marker.get('map'), marker);
        });
    };

    $('#remove-marker').off().on("click", function() {
        clearMarkers();
    });

    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    };
    // Accessing arguments in UI events
    map.addListener('click', function(e) {
        map.panTo(e.latLng);
    });

    // Getting properties with event handlers
    map.addListener('zoom_changed', function() {
        console.log('Zoom: ' + map.getZoom());
    });

    // Listening to DOM events
    /*google.maps.event.addDomListener(document.getElementById('map-canvas'), 'click', function() {
        alert('Map was clicked!');
    });*/
};
