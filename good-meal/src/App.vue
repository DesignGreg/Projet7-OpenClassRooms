<template>
  <div id="app">
    <div class="container container__first">
      <div class="row">
        <div class="col-xl-1"></div>
        <header-app class="col-xl-7"></header-app>
        <div class="col-xl-4"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-1"></div>
        <google-map class="col-xl-7" name="restaurantMap"></google-map>
        <list-app class="col-xl-4"></list-app>
      </div>
    </div>

  </div>
</template>

<script>
  import GoogleMap from './components/core-components/GoogleMap.vue'
  import Header from './components/core-components/Header.vue'
  import List from './components/core-components/List.vue'

  export default {
    name: 'app',

    components: {
      GoogleMap,
      "header-app": Header,
      "list-app": List
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }

  .container__first {
    margin-bottom: 10rem;
  }
</style>