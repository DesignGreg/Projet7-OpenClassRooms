<template>
  <google-map :center="customCenter" :defaultCenter="defaultCenter" @map-initialized="initialize" @map-bounds-changed="selectVisibleMarker" @map-clicked="openAddRestaurant">
    <template slot-scope="{ google, map }">
      <google-markers v-for="marker in markers" :key='marker' :marker="marker" :map="map" :google="google"></google-markers>
      <google-markers v-if="userMarker !== {}" :marker="userMarker" :map="map" :google="google"></google-markers>
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
      // Vient de GoogleMap
      initialize(data) {
        this.map = data.map
        this.google = data.google

        this.askGeolocation()
      },
      // Demande si l'utilisateur accepte la géolocalisation, et recentre la carte sur sa position si acceptée.
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
            this.setPlaces(this.defaultCenter);
          });
        } else {
          this.handleLocationError(false, this.defaultCenter);
          this.setPlaces(this.defaultCenter);
        }
      },
      handleLocationError(browserHasGeolocation, pos) {
        this.map.setCenter(pos)
      },
      // selectVisibleRestaurant dépend du tri et de la zone d'affichage de la carte, et est utilisé par Map et List
      selectVisibleMarker() {
        this.$store.commit('setBoundsValue', this.map.getBounds())
        this.$store.commit('selectVisibleRestaurant')
      },
      // ouvre le composant AddRestaurant avec lat et lng en query
      openAddRestaurant(event) {
        this.$router.push({
          path: '/add-restaurant/',
          query: {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          }
        });
      },
      // Google Places
      setPlaces(location) {
        const service = new this.google.maps.places.PlacesService(this.map);
        // Appel l'action getData du Store
        this.$store.dispatch('getData', {
          service,
          location
        })
      }
    },
    computed: {
      // Génère les markers
      markers() {
        const markersArray = [
          ...this.$store.getters.getRestaurantList.map((restaurant) => {
            return {
              id: restaurant.ID,
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