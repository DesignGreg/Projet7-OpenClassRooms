<template>
  <div class="main">
    <div class="google-map" v-bind:id="mapName" ref="mainMap">
    </div>
<!--    Tuto ici : https://itnext.io/new-unnamed-post-8da9cdbf5df3-->
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map"></slot>
    </template>
  </div>
</template>

<script>
  // Utilisation du plugin pour charger de manière asynchrone l'API
  const GoogleMapsAPILoader = require('google-maps-api-loader');

  export default {
    name: 'google-map',
    props: [
      'name',
      'defaultCenter'
    ],
    data: function() {
      return {
        google: null,
        mapName: this.name + "-map",
        userCoord: {},
        markers: [],
        map: null,
        bounds: null,
        infoWindow: null,
      }
    },
    // Petit plugin pour loader de manière asynchrone l'API Google et éviter des erreurs
    async mounted() {
      const google = await GoogleMapsAPILoader({
        apiKey: '&libraries=places'
      })
      this.google = google
      // Appel de InitMap, et des listeners
      this.initMap();
      this.addChangeBoundsListener();
      this.openAddRestaurant();
    },
    methods: {
      // Initialise la carte
      initMap() {
        // Pour y faire référence plus facilement
        const element = this.$refs.mainMap
        const options = {
          center: this.defaultCenter,
          zoom: 12,
        }
        this.map = new this.google.maps.Map(element, options);
        this.infoWindow = new this.google.maps.InfoWindow;
        // Emet google et map à MainMap
        this.$emit('map-initialized', {
          google: this.google,
          map: this.map
        })
      },
      addChangeBoundsListener() {
        // Pour utiliser les bounds pour l'affichage des restaurants dans la liste
        google.maps.event.addListener(this.map, 'bounds_changed', (event) => {
          this.$emit('map-bounds-changed')
        })
      },
      openAddRestaurant() {
        // Emet l'event pour ajouter un restaurant au click sur la carte
        google.maps.event.addListener(this.map, 'click', (event) => {
          this.$emit('map-clicked', event);
        })
      },
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