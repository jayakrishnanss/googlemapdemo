export default function(location) {
    var position = new google.maps.LatLng(location.latitude, location.longitude),
        map = new google.maps.Map(document.getElementById('map-canvas'), { zoom: location.zoom }),
        markerLocs = [
            { lat: 10.8505, lng: 76.2711, title: 'KL' },
            { lat: 28.7041, lng: 77.1025, title: 'ND' }
        ],
        markers = [];
    map.setCenter(position);

    $('#add-marker').off().on("click", function() {
        clearMarkers();
        for (var i = 0; i < markerLocs.length; i++) {
            markers.push(new google.maps.Marker({
                position: markerLocs[i],
                map: map,
                animation: google.maps.Animation.DROP,
                draggable: true,
                label: markerLocs[i].title
            }));
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
};
