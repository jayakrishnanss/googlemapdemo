export default function(map) {
    $('#kmlLayer').off().on("click", function() {
        switch ($('#kmlLayer').text()) {
            case 'Draw KML Layer':
                drawKMLLayer();
                $('#kmlLayer').text('Remove  KML Layer');
                break;
            case 'Remove  KML Layer':
                $('#kmlLayer').text('Draw KML Layer');
                removeKMLLayer();
                break;
        };
    });

    function drawKMLLayer() {
        var ctaLayer = new google.maps.KmlLayer({
            url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
            map: map
        });
    }
};
