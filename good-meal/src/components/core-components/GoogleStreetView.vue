<template>
  <div class="google-streetview">
    
    <img class="google-streetview__image" :src="getURL" alt="Google Street View Image">
    
  </div>
</template>


<script>
  

  export default {
    name: "google-street-view-app",
    props: ['long', 'lat'],
    computed: {
      getURL() {
        return `https://maps.googleapis.com/maps/api/streetview?size=600x300&location=${this.lat},${this.long}&heading=151.78&pitch=-0.76&key=`
      }
    }
  }
</script>


<style scoped>
  .google-streetview__image {
    width: 90%;
    margin-top: 2rem;
    border-radius: 1rem;
  }
</style>