<template>
  <google-map>
    <template slot-scope="{ google, map }">
      <google-markers
        v-for="marker in markers"
        :marker="marker"
        :map="map"
        :google="google"
      ></google-markers>
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
  computed: {
    markers () {
      return this.$store.getters.getRestaurantInfo.map((restaurant, index) => {
        console.log(restaurant.lat)
        return {
          id: index,
          position: {
            lat: parseFloat(restaurant.lat),
            lng: parseFloat(restaurant.long)
          }
        }
      })
    }
  }
}
</script>
