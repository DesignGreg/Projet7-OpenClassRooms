<template>
  <div class="singleRestaurant">
    <div class="aside__data" v-for="(data,index) in displayRestaurantInfo" :key="data.restaurantName">
          <ul class="aside__list">
            <li class="aside__name"> {{ data.restaurantName }} <span class="aside__score">{{ data.averageRating }}</span> </li>
            <li class="aside__description"> {{ data.description }} </li>
            <div class="container">
              <div class="row row__first">
                <div class="col-xl-6">
                  <li class="aside__button-read-comment">
                    <button-read-comments :onClick="button">
                      <router-link class="button-text" :to='"/read-comments/" + index'>Les avis</router-link>
                    </button-read-comments>
                  </li>
                </div>
                <div class="col-xl-6">
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
  </div>
</template>


<script>
  import ButtonReadComments from '../side-components/ButtonReadComments.vue'
  import ButtonAddComment from '../side-components/ButtonAddComment.vue'
  
  export default {
    name: "single-restaurant-app",
    data: function () {
      return {}
    },
    components: {
      ButtonReadComments,
      ButtonAddComment,
    },
    methods: {
      button: function() {
        console.log('Working');
      }
    },
    computed: {
      displayRestaurantInfo() {
        return this.$store.getters.getRestaurantInfo;
      }
    }
  }
  
</script>

<style scoped>
  .aside__data {
    
  }

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
  
  .button-text {
    font-size: 1.5rem;
    text-decoration: none;
    color: #EBEBEB;
  }
</style>