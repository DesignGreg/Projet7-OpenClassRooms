<template>
  <div class="aside">
    <h2 class="aside__title">  {{ title }} </h2>
  </div>
</template>


<script>
  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants"
      }
    },
    methods: {

    }
  }
</script>


<style scoped>
  .aside__title {
    font-size: 3rem;
  }
</style>