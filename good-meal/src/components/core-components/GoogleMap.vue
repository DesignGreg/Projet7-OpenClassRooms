<template>
  <div class="main">
    <div class="google-map" v-bind:id="mapName" ref="mainMap" @click="openComponent">
    </div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map"></slot>
    </template>
  </div>
</template>

<script>
  //  import mapInterface from '../../interfaces/mapInterface.js'
  const GoogleMapsLoader = require('google-maps');
  const GoogleMapsAPILoader = require('google-maps-api-loader');
  GoogleMapsLoader.KEY = '';

  export default {
    name: 'google-map',
    props: ['name'],
    data: function() {
      return {
        google: null,



        mapName: this.name + "-map",
        userCoord: {},
        markers: [],
        map: null,
        bounds: null,
        infoWindow: null,
        position: {
          lat: null,
          lng: null
        }
      }
    },

    async mounted () {
      const google = await GoogleMapsAPILoader({
        apiKey: ''
      })
      this.google = google
      this.initMap();

      // GoogleMapsLoader.load((google) => {
      //   this.$store.watch(
      //     (state, getters) => getters.getRestaurantInfo,
      //     (newValue, oldValue) => {
      //       console.log('newValue', oldValue)
      //       // this.markers.forEach(this.removeMarker)
      //       newValue.map((restaurant) => {
      //         this.addMarker({
      //           lat: restaurant.lat,
      //           lng: restaurant.long
      //         }, 'restaurant')
      //       })
      //     }
      //   )
      //   this.$store.getters.getRestaurantList().forEach((restaurant) => {
      //         this.addMarker({
      //           lat: restaurant.lat,
      //           lng: restaurant.long
      //         }, 'restaurant')
      //       })
      //   this.initMap();
      //   this.addChangeBoundsListener();
      //   this.askGeolocation();
      // });
    },
    methods: {
      initMap() {
        const element = this.$refs.mainMap
        const options = {
          center: {
            lat: 48.842129,
            lng: 2.329375
          },
          zoom: 12,
        }
        this.map = new this.google.maps.Map(element, options);
        this.infoWindow = new this.google.maps.InfoWindow;
      },
      askGeolocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.userCoord = pos
            this.addMarker(this.userCoord, 'user')
            this.map.setCenter(pos);
          }, function() {
            handleLocationError(true, this.infoWindow, this.map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, this.infoWindow, this.map.getCenter());
        }
      },
      addChangeBoundsListener () {
        google.maps.event.addListener(this.map, 'bounds_changed', () => {
          console.log('changed')
        })
      },
      //      useBounds() {
      //        this.bounds = new google.maps.LatLngBounds();
      //        this.bounds.extend(marker.position);
      //        this.map.fitBounds(this.bounds);
      //      },

      addMarker(coord, type) {
        let icon = '';
        if (type === 'user') {
          icon = 'https://img.icons8.com/color/48/000000/marker.png'
        } else {
          icon = 'https://img.icons8.com/ios/50/000000/restaurant-table.png'
        }
        console.log('j ajoute ', coord)
        const position = new google.maps.LatLng(coord.lat, coord.lng);
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          icon
        });
        //        this.useBounds();
        //        this.bounds = new google.maps.LatLngBounds();
        //        this.bounds.extend(marker.position);
        //        this.map.fitBounds(this.bounds);
        this.markers.push(marker);
      },
      removeMarker(marker) {
        marker.setMap(null)
      },
      openComponent(coord) {
        let icon = 'https://img.icons8.com/ios/50/000000/restaurant-table.png';
        const position = new google.maps.LatLng(coord.lat, coord.lng);
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          icon
        });
        this.markers.push(marker);
        console.log('Done');
        this.$router.push('/add-restaurant/');
      },
    },
    computed: {
//      eventListener() {
//        this.map.addListener('click', function(e) {
//          this.placeMarker(e.latLng, this.map);
//        });
//      },
//      
//      placeMarker(latLng, map) {
//          const marker = new google.maps.Marker({
//            position: latLng,
//            map: this.map
//          });
//          this.map.panTo(latLng);
//      }
      
      //      CommentsClick() {
      //        map.addListener('center_changed', function() {
      //          // 3 seconds after the center of the map has changed, pan back to the
      //          // marker.
      //          window.setTimeout(function() {
      //            map.panTo(marker.getPosition());
      //          }, 3000);
      //        });
      //
      //        marker.addListener('click', function() {
      //          map.setZoom(8);
      //          map.setCenter(marker.getPosition());
      //        });
      //      },

      //      restaurantClick() {
      //        this.map.addListener('click', function(e) {
      //          placeMarkerAndPanTo(e.latLng, this.map);
      //        });
      //
      //        function placeMarkerAndPanTo(latLng, map) {
      //          var marker = new google.maps.Marker({
      //            position: latLng,
      //            map: map
      //          });
      //          this.map.panTo(latLng);
      //        }
      //      }
    }
  };
</script>

<style scoped>
  @media screen and (min-width: 446px) and (max-width: 1200px) {
    .main {
      margin-bottom: 1rem;
    }
  }

  .google-map {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid #26A65B;
    border-radius: 2rem;
  }
</style>