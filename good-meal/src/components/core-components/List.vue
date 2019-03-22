<template>
  <div class="aside">
    <div class="aside__container">
      <h2 class="aside__title"> {{ title }} </h2>
      <div class="aside__data" v-for="data in info">
        <ul class="aside__list">
          <li class="aside__name"> {{ data.restaurantName }} </li>
          <li class="aside__description"> {{ data.description }} </li>
          <li class="aside__button-add-comment"><button-add-comment :onClick="consoleClick">JJJ</button-add-comment></li>
        </ul>
<!--        <div> {{ calculateSumRatings(1) }} </div>-->
      </div>
    </div>
  </div>
</template>


<script>
  import ButtonAddComment from '../side-components/ButtonAddComment.vue'
  const axios = require('axios');

  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants",
        info: [],
        sumRatings: [],
        averageRatings: null
      }
    },
    components: {
      "button-add-comment": ButtonAddComment
    },
    mounted: function() {
      axios
        .get('http://localhost:8080/restaurantList.json')
        .then(response => (this.info = response.data))
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        })
        .then(function() {

        })
    },
    methods: {
      consoleClick() {
        console.log('GGHH')
      }
    },
//    computed: {
//      calculateSumRatings: function(value) {
//        this.info[value].ratings.forEach(function(element) {
//          this.sumRatings += element.stars
//        });
//          return {
//
//          }
//      }
//    }
  }
</script>


<style scoped>
  .aside {
    height: 600px;
    background: grey;
  }
  
  .aside__container {
    width: 100%;
    height: 560px;
    overflow: auto;
  }
  
  .aside__title {
    font-size: 4rem;
  }

  .aside__data {}

  .aside__list {
    list-style-type: none;
    margin-top: 3rem;
  }

  .aside__name {
    font-size: 3rem;
  }

  .aside__description {
    font-size: 2rem;
  }
</style>