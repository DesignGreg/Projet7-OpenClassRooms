<template>
  <div class="aside">
    <h2 class="aside__title"> {{ title }} </h2>
<!--    <button-sort-restaurants class="aside__button">Trier</button-sort-restaurants>-->
    <button-sort-restaurants v-model="score" class="aside__button">Trier</button-sort-restaurants>
    <div class="aside__main-container scroller">
      <div class="aside__second-container">
        <single-restaurant-app></single-restaurant-app>
      </div>
    </div>
  </div>

</template>


<script>
  import SingleRestaurant from './SingleRestaurant.vue';
  import ButtonSortRestaurants from '../side-components/ButtonSortRestaurants.vue';


  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants",
        score: []

      }
    },
    components: {
      "single-restaurant-app": SingleRestaurant,
      ButtonSortRestaurants
    },
//    computed: {
//      displayRestaurantInfo() {
//        return this.$store.getters.getRestaurantInfo;
//      }
//    }
  }
</script>


<style scoped>
  @media screen and (min-width: 446px) and (max-width: 1200px) {
    .aside {
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    .aside__second-container {
      text-align: center;
    }
  }

  .aside {
    height: 600px;
    background: #26A65B;
    border: 2px solid #BD0000;
    border-radius: 2rem;
  }

  .aside__main-container {
    width: 100%;
    height: 520px;
    overflow: auto;
  }

  .aside__second-container {
    background: #EBEBEB;
    border: 2px solid #BD0000;
    border-radius: 2rem;
    padding: 1rem;
  }

  .aside__title {
    font-size: 4rem;
    color: #EBEBEB;
    font-weight: lighter;
    padding-left: 1.2rem;
    display: inline-block;
  }

  .aside__button {
    display: inline-block;
    width: 20%;
    margin-left: 3rem;
    vertical-align: baseline;
  }

  .aside__score {
    font-size: 2rem;
    float: right;
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

  .row__first {
    margin: 0;
    margin-top: 1rem;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px #BD0000;
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #EBEBEB;
    border-radius: 1rem;
  }

  .scroller {
    scrollbar-color: #EBEBEB #BD0000;
    scrollbar-width: thin;
  }
</style>