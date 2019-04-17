<template>
  <div class="container">
    <div class="row row__first">
      <div class="header col-xl-12">
        <router-link class="header__link" :to='"/"'>
          <h1 class="header__title"><img class="header__logo" v-bind:src="image" alt="Chapeau de Cuisinier">
            <span class="header__title-firstWordFirstLetter"> {{titleFirstWordFirstLetter}}</span>
            <span class="header__title-firstWordOtherLetters">{{titleFirstWordOtherLetters}} </span>
            <span class="header__title-secondWordFirstLetter">{{titleSecondWordFirstLetter}}</span>
            <span class="header__title-secondWordOtherLetters">{{titleSecondWordOtherLetters}}</span>
          </h1>
        </router-link>
      </div>
    </div>
    <div class="row row__second">
      <div class="col-xl-1"></div>
      <div class="col-xl-10">
        <div class="row row__third">
          <div class="col-xl-2">
            <a href="https://play.google.com/store"><img class="image image__android" src="../../assets/Android_app.png" alt="PlayStore"></a>
          </div>
          <div class="col-xl-1"></div>
          <div class="col-xl-2">
            <a href="https://www.apple.com/fr/ios/app-store/"><img class="image image__apple" src="../../assets/Iphone_app.png" alt="AppStore"></a>
          </div>
          <div class="col-xl-4"></div>
          <div class="col-xl-1">
            <a href="https://www.facebook.com/"><img class="image image__facebook" src="../../assets/Facebook_icon.png" alt="Facebook"></a>
          </div>
          <div class="col-xl-1">
            <a href="https://twitter.com/"><img class="image image__twitter" src="../../assets/Twitter_icon.png" alt="Twitter"></a>
          </div>
          <div class="col-xl-1">
            <a href="https://www.instagram.com/instagram/?hl=fr"><img class="image image__instagram" src="../../assets/Instagram_icon.png" alt="Instagram"></a>
          </div>
        </div>
      </div>
      <div class="col-xl-1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header-app',
    data: function() {
      return {
        titleFirstWordFirstLetter: "G",
        titleFirstWordOtherLetters: "ood",
        titleSecondWordFirstLetter: "M",
        titleSecondWordOtherLetters: "eal",
        image: require('../../assets/Chef_Hat_White.png')
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .row__first {
    margin-bottom: 0;
  }

  .row__second {
    margin-bottom: 0;
  }

  .row__third {
    margin-top: 4rem;
    margin-bottom: 0;
  }

  .header__title-firstWordFirstLetter {
    font-size: 10rem;
    color: #26A65B;
    font-weight: bold;
  }

  .header__title-firstWordOtherLetters {
    font-size: 10rem;
    font-weight: lighter;
  }

  .header__title-secondWordFirstLetter {
    font-size: 10rem;
    color: #BD0000;
    font-weight: bold;
  }

  .header__title-secondWordOtherLetters {
    font-size: 10rem;
    font-weight: lighter;
  }

  .header__logo {
    width: 20%;
    vertical-align: bottom;
  }

  .image__android {
    width: 90px;
    height: 30px;
  }

  .image__apple {
    width: 90px;
    height: 30px;
  }

  .image__facebook {
    width: 30px;
  }

  .image__twitter {
    width: 30px;
  }

  .image__instagram {
    width: 30px;
  }
  
  .image:hover {
    zoom: 105%;
  }
  
  .header__link {
    text-decoration: none;
    color: #2A2A2A;
  }
</style>