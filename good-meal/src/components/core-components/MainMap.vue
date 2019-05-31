<template>
  <google-map
    :center="customCenter"
    :defaultCenter="defaultCenter"
    @map-initialized="initialize"
    @map-bounds-changed="selectVisibleMarker"
    @map-clicked="openAddRestaurant"
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
            this.setPlaces(pos);

          }, () => {
            this.handleLocationError(true, this.defaultCenter);
          });
        } else {
          this.handleLocationError(false, this.defaultCenter);
        }
      },
      handleLocationError(browserHasGeolocation, pos) {
        console.log(pos)
        this.map.setCenter(pos)
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
      openAddRestaurant(event) {
        this.$router.push({ path: '/add-restaurant/', query: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
      },
      // Ajout Event Listener sur les markers
      openReadComments() {
        google.maps.event.addListener(this.Marker, 'click', (event) => {
          console.log('I am clicked');
        });
      },
      setPlaces(location) {
        this.infowindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesServices(this.map);
        service.nearbySearch({
          location: location,
          radius: 500,
          type: ['restaurant']
        }, callback);
      }
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