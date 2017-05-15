export default function(map) {
    var indiaMain;
    $('#polygon').off().on("click", function() {
        switch ($('#polygon').text()) {
            case 'Draw polygon':
                drawPolygon();
                $('#polygon').text('Remove polygon');
                break;
            case 'Remove polygon':
                $('#polygon').text('Draw polygon');
                removePolygon();
                break;
        };
    });

    function drawPolygon() {
        var coords = [
            { lat: 33.7782, lng: 76.5762 },
            { lat: 19.0760, lng: 72.8777 },
            { lat: 8.0883, lng: 77.5385 },
            { lat: 22.5726, lng: 88.3639 },
            { lat: 33.7782, lng: 76.5762 }
        ];

        indiaMain = new google.maps.Polygon({
            paths: coords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        indiaMain.setMap(map);
    };

    function removePolygon() {
        indiaMain.setMap(null);
    };
};
