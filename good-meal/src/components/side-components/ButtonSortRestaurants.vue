<template>

  <div id="slider">
    
    <vue-slider v-model="values" :data="data" :enable-cross="false"></vue-slider>

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
        values: [0,5],
        data: [0, 1, 2, 3, 4, 5]
      }
    },
    computed: {
//      sortValue: {
//        this.$store.commit('saveSortScore', this.values)
//      }
    }
  }
</script>


<style scoped>
  .slider {
    width: 100%;
  }
  
</style>