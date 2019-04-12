<template>
  <div class="main" ref="autreRef">
    <div class="google-map" v-bind:id="mapName" ref="mainMap">
    </div>
  </div>
</template>

<script>
  //  import mapInterface from '../../interfaces/mapInterface.js'
  const GoogleMapsLoader = require('google-maps');
  GoogleMapsLoader.KEY = '';

  export default {
    name: 'google-map',
    props: ['name'],
    data: function() {
      return {
        mapName: this.name + "-map",
        markerCoordinates: [{
          latitude: 48.842492,
          longitude: 2.328300
        }],
        map: null,
        bounds: null,
        markers: [],
        infoWindow: ''
      }
    },

    mounted: function() {
      GoogleMapsLoader.load((google) => {
        this.bounds = new google.maps.LatLngBounds();
        const element = this.$refs.mainMap
        this.infoWindow = new google.maps.InfoWindow;
        const mapCentre = this.markerCoordinates[0]
        const options = {
          zoom: 18,
          center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
        }
        this.map = new google.maps.Map(element, options);

        this.markerCoordinates.forEach((coord) => {
          //        const marker = mapInterface.createMarker(coord)
          const position = new google.maps.LatLng(coord.latitude, coord.longitude);
          const marker = new google.maps.Marker({
            position,
            map: this.map
          });
          this.markers.push(marker)
          // Pour avoir tous les marqueurs sur la map si plusieurs marqueurs
          //        this.map.fitBounds(this.bounds.extend(position))
        });
      });
    },
    methods: {
      addGeolocation: function() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Loviscation found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      },
      handleGeolocation(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
          'Error: The Geolocation service failed.' :
          'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .google-map {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid #26A65B;
    border-radius: 2rem;
  }
</style>