import '../css/style.css';
import jsonp from './modules/jsonp';
import location from './modules/location';

var gmapiurl = '//maps.googleapis.com/maps/api/js?key=AIzaSyCZ-3mwE26VkImzLfEgUwjzvA6kKBvZkdM&callback=__googleMapsApiOnLoadCallback'; // &language=ja&region=JP

var load = function (done) {
    jsonp(gmapiurl, '__googleMapsApiOnLoadCallback', done);
};

load( function () {
    location.init();
});
