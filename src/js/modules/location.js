import marker from './marker';

var location = {

    init: function() {
        const location = {
            latitude: 28.6139,
            longitude: 77.2090,
            zoom: 5
        };
        marker(location);
    }

};

export default location;
