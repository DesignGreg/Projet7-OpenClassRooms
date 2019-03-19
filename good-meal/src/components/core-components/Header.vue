<template>
  <div class="header">
    <h1 class="header__title"> {{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'header-app',
    data: function () {
      return {
        title: "Good Meal"
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .header__title {
    font-size: 10rem;
  }
</style>