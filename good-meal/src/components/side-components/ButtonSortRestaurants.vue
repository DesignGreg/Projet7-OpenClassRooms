<template>

  <div id="slider">
    
    <vue-slider name="score" :value="range" :data="data" :enable-cross="false" @input="sortRestaurants"></vue-slider>

  </div>

</template>


<script>

  
  
  export default {
    props: {
      onClick: {
        type: Function,
        required: true
      },
    },
    data: function() {
      return {
        range: [0,5],
        data: [0, 1, 2, 3, 4, 5]
      }
    },
    methods: {
      sortRestaurants(value) {
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