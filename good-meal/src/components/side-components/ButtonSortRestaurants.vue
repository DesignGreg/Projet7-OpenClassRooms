<template>

  <div id="slider">
    
    <vue-slider name="score" :value="range" :data="data" :enable-cross="false" @change="sortRestaurants"></vue-slider>

  </div>

</template>


<script>
// Utilisation du plugin vue-slider-component
  
  export default {
    data: function() {
      return {
        range: [0,5],
        data: [0, 1, 2, 3, 4, 5]
      }
    },
    methods: {
      sortRestaurants(value) {
        this.$store.commit('setSortValue', value)
        this.$store.commit('selectVisibleRestaurant')
        this.$emit('input', value)
      }
    }
  }
</script>


<style scoped>
  .slider {
    width: 100%;
  }
  
</style>