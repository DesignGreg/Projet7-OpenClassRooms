<template>
  <div class="main">
    <div class="google-map" v-bind:id="mapName" ref="mainMap">
    </div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map"></slot>
    </template>
  </div>
</template>

<script>
  const GoogleMapsAPILoader = require('google-maps-api-loader');

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

    async mounted() {
      const google = await GoogleMapsAPILoader({
        apiKey: ''
      })
      this.google = google
      this.initMap();
      this.addChangeBoundsListener();
      this.clickOpenRestaurantComponent();
//      this.clickOpenReadCommentsComponent();
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
        this.$emit('map-initialized', {
          google: this.google,
          map: this.map
        })
      },
      addChangeBoundsListener() {
        google.maps.event.addListener(this.map, 'bounds_changed', (event) => {
          this.$emit('map-bounds-changed')
        })
      },
      clickOpenRestaurantComponent() {
        google.maps.event.addListener(this.map, 'click', (event) => {
          this.$emit('map-clicked', event)
        })
      },
//      clickOpenReadCommentsComponent() {
//        google.maps.event.addListener(this.marker, 'click', function() {
//          console.log('Ok');
//        });
//      }
    },
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