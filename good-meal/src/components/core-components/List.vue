<template>
  <div class="aside">
    <h2 class="aside__title"> {{ title }} </h2>
    <div class="aside__main-container">
      <div class="aside__second-container">
        <single-restaurant-app></single-restaurant-app>
        <!--
        <div class="aside__data" v-for="(data,index) in displayRestaurantInfo" :key="data.restaurantName">
          <ul class="aside__list">
            <li class="aside__name"> {{ data.restaurantName }} <span class="aside__score">{{ data.averageRating }}</span> </li>
            <li class="aside__description"> {{ data.description }} </li>
            <div class="container">
              <div class="row row__first">
                <div class="col-xl-6">
                  <li class="aside__button-read-comment">
                    <button-read-comments>
                      <router-link :to='"/read-comments/" + index'>Lire Commentaires</router-link>
                    </button-read-comments>
                  </li>
                </div>
                <div class="col-xl-6">
                  <li class="aside__button-add-comment">
                    <button-add-comment>
                      <router-link :to='"/add-comment/" + index'>Ajouter commentaire</router-link>
                    </button-add-comment>
                  </li>
                </div>
              </div>
            </div>
          </ul>
        </div>
-->
      </div>
    </div>
  </div>
</template>


<script>
  //  import ButtonReadComments from '../side-components/ButtonReadComments.vue'
  //  import ButtonAddComment from '../side-components/ButtonAddComment.vue'
  import SingleRestaurant from './SingleRestaurant.vue'
  //  import ButtonSortRestaurants from '../side-components/ButtonSortRestaurants.vue'

  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants",

      }
    },
    components: {
      //      ButtonReadComments,
      //      ButtonAddComment,
      //      ButtonSortRestaurants,
      "single-restaurant-app": SingleRestaurant

    },
    computed: {
      displayRestaurantInfo() {
        return this.$store.getters.getRestaurantInfo;
      }
    }
  }
</script>


<style scoped>
  .aside {
    height: 600px;
    background: #399A56;
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
</style>