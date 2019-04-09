<template>
  <div id="app">
    <div class="container">
      <div class="row row__first">
        <header-app class="col-xl-7"></header-app>
        <div class="col-xl-1"></div>
        <div class="col-xl-4"></div>
      </div>

      <div class="row row__second">
        <google-map class="col-xl-7" name="restaurantMap"></google-map>
        <div class="col-xl-1"></div>
        <list-app class="col-xl-4"></list-app>
      </div>

      <div class="row row__third">
        <router-view class="col-xl-7"></router-view>
        <div class="col-xl-1"></div>
        <footer-app class="col-xl-4"></footer-app>
      </div>
    </div>
  </div>
</template>

<script>
  import GoogleMap from './components/core-components/GoogleMap.vue';
  import Header from './components/core-components/Header.vue';
  import List from './components/core-components/List.vue';
  import Footer from './components/core-components/Footer.vue';
  
  export default {
    name: 'app',

    components: {
      GoogleMap,
      "header-app": Header,
      "list-app": List,
      "footer-app": Footer
    },
    mounted() {
      this.$store.dispatch('getData')
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
  
  html {
    background-image: url(assets/Background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .row {
    margin-bottom: 3rem;
  }
</style>