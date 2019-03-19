<template>
  <div>
    <div class="main main__google-map" v-bind:id="mapName">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'google-map',
    props: ['name'],
    data: function() {
      return {
        mapName: this.name + "-map",
        markerCoordinates: [{
          latitude: 48.842492,
          longitude: 2.328300
        }],
        map: null,
        bounds: null,
        markers: []
      }
    },
    mounted: function() {
      this.bounds = new google.maps.LatLngBounds();
      const element = document.getElementById(this.mapName)
      const mapCentre = this.markerCoordinates[0]
      const options = {
        zoom: 18,
        center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
      }
      this.map = new google.maps.Map(element, options);
      this.markerCoordinates.forEach((coord) => {
        const position = new google.maps.LatLng(coord.latitude, coord.longitude);
        const marker = new google.maps.Marker({
          position,
          map: this.map
        });
        this.markers.push(marker)
        // Pour avoir tous les marqueurs sur la map si plusieurs marqueurs
        //        this.map.fitBounds(this.bounds.extend(position))
      });
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main__google-map {
    width: 100%;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>