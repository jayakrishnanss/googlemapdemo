export default function(map) {
    var path;
    $('#polyline').off().on("click", function() {
        switch ($('#polyline').text()) {
            case 'Draw polyline':
                drawPolyline();
                $('#polyline').text('Remove polyline');
                break;
            case 'Remove polyline':
                $('#polyline').text('Draw polyline');
                removePolyline();
                break;
        };
    });

    function drawPolyline() {
        var pathCoordinates = [
            { lat: 9.9312328, lng: 76.2673041 },
            { lat: 12.9715987, lng: 77.5945627 },
            { lat: 13.0826802, lng: 80.2707184 },
            { lat: 19.0760, lng: 72.8777 },
            { lat: 22.5726, lng: 88.3639 }
        ];
        path = new google.maps.Polyline({
            path: pathCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        path.setMap(map);
    }

    function removePolyline() {
        if (path)
            path.setMap(null);
    }
};
