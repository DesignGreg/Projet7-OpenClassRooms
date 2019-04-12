<template>
  <div class="google-streetview">
    
    <img class="google-streetview__image" :src="getURL" alt="Google Street View Image">
    
  </div>
</template>


<script>
  
  // Lien statique HTML, en utilisant la Lat et Long du restaurant sélectionné (ID)
  
  
//  const axios = require('axios');
  
  export default {
    name: "google-street-view-app",
    props: ['long', 'lat'],
    computed: {
      getURL() {
        return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${this.lat},${this.long}&heading=151.78&pitch=-0.76&key=`
      }
    }
//    mounted: {
//      axios.get('http://localhost:8080/restaurantList.json').then((response) => {
//        this.restaurantData = response.data[this.$route.params.restaurantID];
//      }, (err) => {
//        console.log(err);
//        return false;
//      });
//    }
  }
</script>


<style scoped>
  .google-streetview__image {
    width: 90%;
    margin-top: 2rem;
    border-radius: 1rem;
  }
</style>