<template>
  <div class="read-comments__margin">
    <div class="read-comments">
      <div class="read-comments__container scroller">
        <div class="container">

          <div class="row row__first">
            <div class="col-4">

              <ul class="read-comments__list">

                <li class="row__first--restaurantName"> {{ restaurantData.restaurantName }}
                  <router-link class="back__link" :to='"/"'>
                    <i class="fas fa-arrow-circle-down"></i>
                  </router-link>
                </li>

                <li>
                  <score-app :star-number="averageRating"></score-app>
                </li>

                <li>
                  <google-street-view-app :long="restaurantData.long" :lat="restaurantData.lat"></google-street-view-app>
                </li>
                <li>
                  <p class="row__first--restaurantAddress"> {{ restaurantData.address }} </p>
                </li>
              </ul>
            </div>
            
            <div class="col-8">
              <div class="read-comments__data" v-for="comment in restaurantData.ratings" :key="comment.comment">
                <p class="row__first--restaurantAuthor"> {{ comment.author }} 
                <span> 
                <score-app :star-number="comment.stars"></score-app>
                </span> </p>
                <p class="row__first--restaurantComments"> {{ comment.comment }} </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonAddComment from '../side-components/ButtonAddComment.vue';
  import GoogleStreetView from './GoogleStreetView.vue';
  import ScoreStars from '../side-components/ScoreStars.vue';

  export default {
    name: 'read-comments-app',
    components: {
      ButtonAddComment,
      "google-street-view-app": GoogleStreetView,
      "score-app": ScoreStars
    },
    methods: {
      button: function() {
        console.log('Working');
      }
    },
    computed: {
      restaurantData () {
        return this.$store.getters.getRestaurantById(this.$route.params.restaurantID)
      },
      averageRating () {
        return this.$store.getters.getRestaurantAvgRating(this.$route.params.restaurantID)

      }
    }
  }
</script>

<style scoped>
  @media screen and (min-width: 446px) and (max-width: 576px) {
    .row__first--restaurantComments {
    font-size: 1.5rem !important;
    }
  }
  
  @media screen and (min-width: 446px) and (max-width: 768px) {
    .row__first--restaurantName {
      font-size: 1.5rem !important;
    }

    .read-comments__data {
      padding: 1rem !important;
    }
  }

  .read-comments {
    background: #EBEBEB;
    border: 2px solid #BD0000;
    border-radius: 2rem;
    height: 300px;
    width: 100%;
  }

  .read-comments__list {
    list-style-type: none;
  }

  .read-comments__container {
    margin-top: 2rem;
    width: 100%;
    height: 260px;
    overflow: auto;
  }

  .row__first--restaurantName {
    font-size: 2.5rem;
    font-weight: bold;
    display: inline;
  }

  .row__first--restaurantAddress {
    margin-top: 2rem;
    width: 70%;
    font-size: 1.5rem;
  }

  .read-comments__data {
    margin-bottom: 0.5rem;
    padding: 1.5rem;
    border: 1px solid #26A65B;
    border-radius: 2rem;
    margin-left: -2rem;
  }

  .read-comments__data:hover {
    box-shadow: 1px 1px 2px #26A65B;
  }

  .row__first--restaurantAuthor {
    font-size: 1.5rem;
  }

  .row__first--restaurantScore {
    font-size: 1.5rem;
  }

  .row__first--restaurantComments {
    font-size: 2rem;
  }

  .fa-arrow-circle-down {
    font-size: 2rem;
    padding-left: 2rem;
    color: #BD0000;
  }

  .fa-arrow-circle-down:hover {
    zoom: 105%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px #26A65B;
    border-radius: 1rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #BD0000;
    border-radius: 1rem;
  }

  .scroller {
    scrollbar-color: #BD0000 #EBEBEB;
    scrollbar-width: thin;
  }
</style>