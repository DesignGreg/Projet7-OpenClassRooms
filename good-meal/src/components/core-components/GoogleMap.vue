<template>
  <div class="main" ref="autreRef">
    <div class="google-map" v-bind:id="mapName" ref="mainMap" @click="openComponent">
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

    mounted: function() {
      GoogleMapsLoader.load((google) => {
//        google.addEventListener()
        this.$store.watch(
          (state, getters) => getters.getRestaurantInfo,
          (newValue, oldValue) => {
            // this.markers.forEach(this.removeMarker)
            newValue.map((restaurant) => {
              this.addMarker({
                lat: restaurant.lat,
                lng: restaurant.long
              }, 'restaurant')
            })
          }
        )

//        machinChose.addListener('click', addRestaurant)

        function clickHandler (event) {
          if (typeof event === 'addRestaurant') {
            addRestaurant(event)
          }
        }

        this.bounds = new google.maps.LatLngBounds();
        const element = this.$refs.mainMap
        this.infoWindow = new google.maps.InfoWindow;
        const options = {
          zoom: 18,
        }
        this.map = new google.maps.Map(element, options);

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
      });
    },
    methods: {
      addMarker(coord, type) {
        let icon = ''
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
        this.markers.push(marker)
      },
      removeMarker(marker) {
        marker.setMap(null)
      },
      openComponent() {
        console.log('Ca fonctionne');
        this.$router.push('/add-restaurant/');
      }
    },
    computed: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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