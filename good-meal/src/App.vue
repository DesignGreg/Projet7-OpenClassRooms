<template>
  <div id="app">
    <div class="container">
      <div class="row row__first">
        <header-app class="col-lg-12 col-xl-7"></header-app>
        <div class="col-xl-5"></div>
      </div>

      <div class="row row__second ">
        <main-map class="col-xl-7" name="restaurantMap"></main-map>
        <div class="col-xl-1"></div>
        <list-app class="col-xl-4"></list-app>
      </div>

      <div class="row row__third">
        <div class="col-xl-7">
          <transition name="module">
            <router-view class="module"></router-view>
          </transition>
        </div>
        <div class="col-xl-1"></div>
        <footer-app class="col-xl-4"></footer-app>
      </div>
    </div>
  </div>
</template>

<script>
  import MainMap from './components/core-components/MainMap.vue';
  import Header from './components/core-components/Header.vue';
  import List from './components/core-components/List.vue';
  import Footer from './components/core-components/Footer.vue';

  export default {
    name: 'app',

    components: {
      MainMap,
      "header-app": Header,
      "list-app": List,
      "footer-app": Footer
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(assets/Background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: auto;
  }

  .row{
    margin-bottom: 3rem;
  }

  .module {
    margin-top: -20rem;
  }

  .module-enter {
    opacity: 0;
    margin-top: 20rem;
  }

  .module-enter-active {
    transition-property: all;
    transition-duration: 1s;
  }

  .module-leave-active {
    transition-property: all;
    transition-duration: .2s;
  }

  .module-enter-to {
    margin-top: -20rem;
  }

  .module-leave-to {
    margin-top: 20rem;
    opacity: 0
  }
</style>