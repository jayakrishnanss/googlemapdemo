import gmap from './gmap';

var location = {

    init: function() {
        const location = {
            latitude: 20.5937,
            longitude: 78.9629,
            zoom: 5
        };
        gmap(location);
    }

};

export default location;
