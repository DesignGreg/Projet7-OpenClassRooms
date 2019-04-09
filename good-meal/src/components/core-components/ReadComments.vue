<template>
  <div class="read-comments__margin">
    <div class="read-comments">
      <div class="read-comments__container">
        <div class="container">
          <div class="read_comments__data">
            <div class="row row__first">
              <div class="col-xl-4">
                <p class="row__first--restaurantName"> {{ restaurantData.restaurantName }} <span> {{ restaurantData.averageRating }} </span> </p>
                <p class="row__first--restaurantAddress"> {{ restaurantData.address }} </p>



                <!--
              <button-add-comment :onClick="button">
                <router-link :to='"/add-comment/" + index'>Ajouter commentaire</router-link>
              </button-add-comment>
-->

              </div>
              <div class="col-xl-8">
                <div class="read-comments__data" v-for="comment in restaurantData.ratings" :key="comment.comment">
                  <p class="row__first--restaurantAuthor"> {{ comment.author }} <span class="row__first--restaurantScore"> {{ comment.stars }} </span> </p>
                  <p class="row__first--restaurantComments"> {{ comment.comment }} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const axios = require('axios');
  import ButtonAddComment from '../side-components/ButtonAddComment.vue'

  export default {
    name: 'read-comments-app',
    data: function() {
      return {
        restaurantData: [],
        restaurantLat: '',
        restaurantLong: ''
      }
    },
    components: {
      ButtonAddComment
    },
    methods: {
      button: function() {
        console.log('Working');
      }
    },
    mounted() {
      axios.get('http://localhost:8080/restaurantList.json').then((response) => {
        this.restaurantData = response.data[this.$route.params.restaurantID];
        this.restaurantLat = restaurantData.lat;
        this.restaurantLong = restaurantData.long;
      }, (err) => {
        console.log(err);
        return false;
      });
    },
  }
</script>

<style scoped>
  .read-comments {
    background: #EBEBEB;
    border: 2px solid #BD0000;
    border-radius: 2rem;
    height: 300px;
    width: 100%;
  }

  .read-comments__container {
    margin-top: 2rem;
    width: 100%;
    height: 260px;
    overflow: auto;
  }

  .row__first--restaurantName {
    font-size: 3rem;
  }

  .row__first--restaurantAddress {
    margin-top: 2rem;
    width: 70%;
    font-size: 1.5rem;
  }

  .read-comments__data {
    margin-bottom: 0.5rem;
    padding: 1rem;
    border: 1px solid #2A2A2A;
    border-radius: 2rem;
  }
  
  .read-comments__data:hover {
    box-shadow: 1px 1px 2px #2A2A2A;
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
</style>