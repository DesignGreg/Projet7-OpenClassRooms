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
      // Création des markers
      this.mapMarker = new this.google.maps.Marker({
        position: this.marker.position,
        map: this.map,
        marker: this.marker,
        icon: this.getIconUrl(this.marker.type)
      })
      // Ajout du listener click sur icon ouvre composant ReadComments
      this.mapMarker.addListener('click', () => {
          if (this.marker.type !== 'user') {
            this.$router.push({
              path: `/read-comments/${this.marker.id}`
            });
          }
        });
    },
    // Pour supprimer les markers avant de les redessiner
    beforeDestroy() {
      this.mapMarker.setMap(null)
    },
    methods: {
      // Dessiner les markers
      getIconUrl() {
        let icon
        switch (this.marker.type) {
          case 'restaurant':
            icon = 'https://img.icons8.com/ios/50/000000/restaurant-table.png';
            break;
          case 'user':
            icon = 'https://img.icons8.com/color/48/000000/marker.png';
            break;
          default:
            icon = 'https://img.icons8.com/ultraviolet/48/000000/record.png';
            break;
        }
        return icon
      }
    },
  }
</script>


<style scoped>

</style>