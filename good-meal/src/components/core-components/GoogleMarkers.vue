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
    data() {
      return {
        mapMarker: null
      }
    },
    mounted() {
      this.mapMarker = new this.google.maps.Marker({
        position: this.marker.position,
        map: this.map,
        marker: this.marker,
        icon: this.getIconUrl(this.marker.type)
      })
    },
    beforeDestroy() {
      this.mapMarker.setMap(null)
    },
    methods: {
      getIconUrl(markerType) {
        let icon
        switch (this.marker.type) {
          case 'restaurant':
            icon = 'https://img.icons8.com/ios/50/000000/restaurant-table.png'
            break;
          case 'user':
            icon = 'https://img.icons8.com/color/48/000000/marker.png'
            break;
          default:
            icon = 'https://img.icons8.com/ultraviolet/48/000000/record.png'
            break;
        }
        return icon
      },
//      drawMarkers() {
//        this.mapMarker = new this.google.maps.Marker({
//          position: this.marker.position,
//          map: this.map,
//          marker: this.marker,
//          icon: this.getIconUrl(this.marker.type)
//        })
//      }
    },
//    computed: {
//      drawMarkers() {
//        this.drawMarkers();
//      }
//    }
  }
</script>


<style scoped>

</style>