<template>

  <div id="slider">
    
    <vue-slider v-model="value_2" :data="data" :enable-cross="false"></vue-slider>

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
        value_2: [0,5],
        data: [0, 1, 2, 3, 4, 5]
      }
    }
  }
</script>


<style scoped>
  .slider {
    width: 100%;
  }
  
</style>