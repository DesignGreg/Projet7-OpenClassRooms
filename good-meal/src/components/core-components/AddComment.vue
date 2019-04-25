<template>
  <div class="add-comment__margin">
    <div class="add-comment">
      <div class="add-comment__container">
        <div class="container">
          <div class="row row__first">
            <div class="col-12">
              <p class="add-comment__title">Laissez votre avis...</p>
            </div>
          </div>
          <div class="row row__second">
            <div class="col-4">

              <ul class="add-comment__list">

                <li>
                  <p class="row__second--restaurantName"> {{ restaurantData.restaurantName }}</p>
                  <router-link class="header__link" :to='"/"'>
                    <i class="fas fa-arrow-circle-down"></i>
                  </router-link>
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
              <form action="" method="post" class="add-comment__form">
                <label class="add-comment__nameLabel" for="name">Prénom</label>
                <input class="add-comment__nameInput" type="text" name="name" id="name" v-model="nom" required>
                <set-score-app v-model="rating" :key="reloadComponent"></set-score-app>
                <label class="add-comment__textLabel" for="comment">Commentaire</label>
                <textarea class="add-comment__text" name="comment" id="text" cols="30" rows="8" v-model="commentaire" required></textarea>



                <div class="add__comments--button-container">
                  <button-validate-form-add-comments class="button-text">Confirmer</button-validate-form-add-comments>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  const axios = require('axios');
  import GoogleStreetView from './GoogleStreetView.vue';
  import ButtonValidateFormAddComments from '../side-components/ButtonValidateFormAddComments.vue';
  import SetScoreStars from '../side-components/SetScoreStars.vue';

  export default {
    name: 'add-comment-app',
    data: function() {
      return {
        nom: '',
        commentaire: '',
        rating: 0,
        reloadComponent: 0,
        restaurantData: []
      }
    },
    components: {
      "google-street-view-app": GoogleStreetView,
      ButtonValidateFormAddComments,
      "set-score-app": SetScoreStars
    },
    mounted() {
      axios.get('http://localhost:8080/restaurantList.json').then((response) => {
        this.restaurantData = response.data[this.$route.params.restaurantID];
      }, (err) => {
        console.log(err);
        return false;
      });
    },
    methods: {
      getRestaurantData (restaurantID) {
        axios.get('http://localhost:8080/restaurantList.json').then((response) => {
          this.restaurantData = response.data[restaurantID];
        }, (err) => {
          console.log(err);
          return false;
        });
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.params.restaurantID !== from.params.restaurantID) {
          this.getRestaurantData(this.$route.params.restaurantID);
          this.nom = '';
          this.commentaire = '';
          this.rating = 0;
          this.reloadComponent += 1;
        }
      }
    }
  }
</script>


<style scoped>
  @media screen and (min-width: 446px) and (max-width: 576px) {
    .row__second--restaurantName {
      font-size: 1.5rem !important;
    }

    .add-comment__nameInput {
      display: block !important;
      margin-bottom: 1rem !important;
    }
  }

  .add-comment {
    background: #EBEBEB;
    border: 2px solid #BD0000;
    border-radius: 2rem;
    height: 300px;
    width: 100%;
  }

  .add-comment__container {
    margin-top: 2rem;
    width: 100%;
    height: 260px;
    overflow: auto;
  }

  .add-comment__list {
    list-style-type: none;
  }

  .add-comment__title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: -1rem;
  }

  .row__first {
    margin-bottom: 2rem;
  }

  .row__second {
    margin-bottom: 0;
  }

  .row__second--restaurantName {
    font-size: 2.5rem;
    font-weight: bold;
    display: inline;
  }

  .row__first--restaurantAddress {
    margin-top: 2rem;
    width: 70%;
    font-size: 1.5rem;
  }

  .add-comment__nameLabel {
    display: block;
    font-size: 2rem;
  }

  .add-comment__nameInput {
    display: inline-block;
    height: 2rem;
    vertical-align: top;
  }

  .add-comment__scoreLabel {
    display: inline-block;
    font-size: 2rem;
    margin-left: 4rem;
  }

  .add-comment__textLabel {
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }

  .add-comment__text {
    width: 100%;
  }

  input {
    border-width: 1px;
    border-color: #26A65B;
    border-radius: 0.5rem;
  }

  input:focus {
    outline: none;
    box-shadow: 1px 1px 1px #26A65B;
  }

  textarea {
    border-color: #26A65B;
    border-radius: 0.5rem;
  }

  textarea:focus {
    outline: none;
    box-shadow: 1px 1px 1px #26A65B;
  }

  .fa-arrow-circle-down {
    font-size: 2rem;
    padding-left: 2rem;
    color: #BD0000;
  }

  .fa-arrow-circle-down:hover {
    zoom: 105%;
  }

  .add__comments--button-container {
    margin: 0 auto;
  }

  .button-text {
    text-decoration: none;
    color: #EBEBEB;
    margin-top: 1.5rem;
  }
</style>