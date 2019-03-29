<template>
  <div class="container">
    <div class="row row__first">
      <div class="header col-xl-12">
        <h1 class="header__title"><img class="header__logo" v-bind:src="image" alt="Chapeau de Cuisinier"> {{ title }}</h1>
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
        title: "Good Meal",
        image: require('../../assets/Chef_Hat.png')
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
    margin-top: 5rem;
    margin-bottom: 0;
  }
  
  .header {}

  .header__title {
    font-size: 10rem;
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
</style>