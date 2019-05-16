<template>
  <div class="singleRestaurant">
      <ul class="aside__list">
        <li class="aside__name"> {{ restaurant.restaurantName }}</li>
        <li class="aside__score">
          <score-app :star-number="restaurant.averageRating"></score-app>
        </li>
        <li class="aside__description"> {{ restaurant.description }} </li>
        <div class="container">
          <div class="row row__first">
            <div class="col-6">
              <li class="aside__button-read-comment">
                <button-read-comments :onClick="button">
                  <router-link class="button-text" :to="`/read-comments/${index}`" >Les avis</router-link>
                </button-read-comments>
              </li>
            </div>
            <div class="col-6">
              <li class="aside__button-add-comment">
                <button-add-comment :onClick="button">
                  <router-link class="button-text" :to='"/add-comment/" + index'>Votre avis</router-link>
                </button-add-comment>
              </li>
            </div>
          </div>
        </div>
      </ul>
  </div>
</template>


<script>
  import ButtonReadComments from '../side-components/ButtonReadComments.vue';
  import ButtonAddComment from '../side-components/ButtonAddComment.vue';
  import ScoreStars from '../side-components/ScoreStars.vue';

  export default {
    name: "single-restaurant-app",
    props: [ 'restaurant', 'index' ],
    data: function() {
      return {}
    },
    components: {
      ButtonReadComments,
      ButtonAddComment,
      "score-app": ScoreStars
    },
    methods: {
      button: function() {
        console.log('Working');
      }
    },
    computed: {
      displayRestaurantInfo() {
        return this.$store.getters.getRestaurantInfo;
//        let restaurants = this.$store.getters.getRestaurantInfo;
//        return restaurants.filter( restaurant => restaurant.averageRating >= this.sliderRating)
      }
    }
  }
</script>

<style scoped>
  .aside__list {
    list-style-type: none;
    margin-top: 2rem;
  }

  .aside__name {
    font-size: 2.5rem;
    font-weight: bold;
    display: inline-block;
  }

  .aside__score {
    display: inline-block;
    margin-left: 1rem;
    vertical-align: super
  }

  .aside__description {
    font-size: 2rem;
  }

  .row__first {
    margin: 0;
    margin-top: 1rem;
  }

  .button-text {
    font-size: 1.5rem;
    text-decoration: none;
    color: #EBEBEB;
  }
</style>