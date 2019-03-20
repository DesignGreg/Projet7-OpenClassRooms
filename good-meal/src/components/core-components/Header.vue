<template>
  <div class="header">
    <h1 class="header__title"><img class="header__logo" v-bind:src="image" alt="Chapeau de Cuisinier"> {{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Good Meal",
        image: require('../../assets/Chef_Hat.png')
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .header {

  }
  
  .header__title {
    font-size: 10rem;
  }
  
  .header__logo {
    width: 20%;
    vertical-align: bottom;
  }
</style>