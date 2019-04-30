export default {
//  loadApi,
  createMap,
  createMarker
};

const GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = '';


function createMap (mapElem, center, zoom) {
  const options = {
    zoom,
    center: new google.maps.LatLng(center.latitude, center.longitude)
  };
  return new google.maps.Map(mapElem, options);
}

function createMarker (coord) {
  const position = new google.maps.LatLng(coord.latitude, coord.longitude);
  return new google.maps.Marker({
    position,
    map: this.map
  });
  
  
}
