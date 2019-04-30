<template>
  <div class="google-markers">
    
  </div>
</template>


<script>
export default {
  name: 'google-markers',
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },
  mounted () {
    new this.google.maps.Marker({
      position: this.marker.position,
      map: this.map,
      marker: this.marker
    })
  }
}
</script>


<style scoped>
  
</style>