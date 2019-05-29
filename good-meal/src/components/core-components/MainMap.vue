<template>
  <google-map
    :center="customCenter"
    :defaultCenter="defaultCenter"
    @map-initialized="initialize"
    @map-bounds-changed="selectVisibleMarker"
    @map-clicked="openReadOrAddComponent"
  >
    <template slot-scope="{ google, map }">
      <google-markers v-for="marker in markers" :marker="marker" :map="map" :google="google"></google-markers>
    </template>
  </google-map>
</template>

<script>
  import GoogleMap from './GoogleMap'
  import GoogleMarkers from './GoogleMarkers'
  export default {
    components: {
      GoogleMap,
      GoogleMarkers
    },
    data: function() {
      return {
        google: null,
        mapName: this.name + "-map",
        userCoord: {},
        userMarker: {
          type: 'user'
        },
        marker: null,
        map: null,
        bounds: null,
        infoWindow: null,
        position: {
          lat: null,
          lng: null
        },
        defaultCenter: {
          lat: 48.842702,
          lng: 2.328434
        },
        customCenter: {
          lat: null,
          lng: null
        }
      }
    },
    mounted() {
      // this.askGeolocation();
      // this.clickOpenReadCommentsComponent();
    },
    methods: {
      initialize(data) {
        this.map = data.map
        this.google = data.google

        this.askGeolocation()
      },
      askGeolocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.customCenter = pos
            this.userCoord = pos
            this.userMarker = {
              ...this.userMarker,
              position: pos,
            }
            this.map.setCenter(this.customCenter)
            // this.infoWindow.setPosition(pos);
            // this.infoWindow.setContent('Location found.');
            // this.infoWindow.open(this.map);
            
            this.setPlaces(pos);

          }, () => {
            this.handleLocationError(true, this.defaultCenter);
          });
        } else {
          //           Browser doesn't support Geolocation
          this.handleLocationError(false, this.defaultCenter);
        }
      },
      handleLocationError(browserHasGeolocation, pos) {
        console.log(pos)
        this.map.setCenter(pos)
        // this.infoWindow.setPosition(pos);
        // this.infoWindow.setContent(browserHasGeolocation ?
        //   'Error: The Geolocation service failed.' :
        //   'Error: Your browser doesn\'t support geolocation.');
        // this.infoWindow.open(this.map);
      },
      addMarker(coord) {
        let icon = 'https://img.icons8.com/color/48/000000/marker.png';
        const position = new google.maps.LatLng(coord.lat, coord.lng);
        const marker = new google.maps.Marker({
          position,
          map: this.map,
          icon
        });
        this.marker = marker;
      },
      selectVisibleMarker() {
        this.$store.commit('setBoundsValue', this.map.getBounds())
        this.$store.commit('selectVisibleRestaurant')
      },
      setPlaces (location) {
        this.infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesServices(this.map);
        service.nearbySearch({
          location: location,
          radius: 500,
          type: ['restaurant']
        }, callback);
      },
      openReadOrAddComponent(event) {
        console.log(event.latLng);
        this.$emit('storeCoord', event.latLng);

        let icon = 'https://img.icons8.com/ios/50/000000/restaurant-table.png';
        // const position = new google.maps.LatLng(coord.lat, coord.lng);
        // const marker = new google.maps.Marker({
        //   position,
        //   map: this.map,
        //   icon
        // });
        // this.markers.push(marker);


        this.$router.push({ path: '/add-restaurant/', query: { lat: event.latLng.lat(), lng: event.latLng.lng() }});

      },
      // clickOpenReadCommentsComponent() {
      //   this.google.maps.event.addListener(this.marker, 'click', function() {
      //     console.log('Ok');
      //   });
      // }
    },
    computed: {
      markers() {
        const markersArray = [
          ...this.$store.getters.getRestaurantList.map((restaurant, index) => {
            return {
              id: index,
              position: {
                lat: parseFloat(restaurant.lat),
                lng: parseFloat(restaurant.long),
              },
              type: 'restaurant'
            }
          })
        ]
        if (this.userMarker !== {}) {
          markersArray.push(this.userMarker)
        }
        return markersArray
      }
    }
  }
</script>