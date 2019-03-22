export default {
//  loadApi,
  createMap,
  createMarker
}

// Your personal API key.
// Get it here: https://console.cloud.google.com/google/maps-apis
//const API_KEY = '';
//const CALLBACK_NAME = 'gmapsCallback';



//function loadApi() {
//  let initialized = !!window.google;
//  let resolveInitPromise;
//  let rejectInitPromise;
//  // This promise handles the initialization
//  // status of the google maps script.
//  const initPromise = new Promise((resolve, reject) => {
//    resolveInitPromise = resolve;
//    rejectInitPromise = reject;
//  });
//  // If Google Maps already is initialized
//  // the `initPromise` should get resolved
//  // eventually.
//  if (initialized) return initPromise;
//
//  initialized = true;
//  // The callback function is called by
//  // the Google Maps script if it is
//  // successfully loaded.
//  window[CALLBACK_NAME] = () => resolveInitPromise(window.google);
//
//  // We inject a new script tag into
//  // the `<head>` of our HTML to load
//  // the Google Maps script.
//  const script = document.createElement('script');
//  script.async = true;
//  script.defer = true;
//  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
//  script.onerror = rejectInitPromise;
//  document.querySelector('head').appendChild(script);
//  console.log('tàtàtàtà')
//  return initPromise;
//}

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
