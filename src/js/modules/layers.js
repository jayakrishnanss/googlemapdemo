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

    }
};
