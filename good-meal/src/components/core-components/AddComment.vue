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
                <input class="add-comment__nameInput" type="text" name="name" id="name" v-model="comment.author" required>
                <set-score-app v-model="comment.stars" :key="reloadComponent"></set-score-app>
                <label class="add-comment__textLabel" for="comment">Commentaire</label>
                <textarea class="add-comment__text" name="comment" id="text" cols="30" rows="8" v-model="comment.comment" required></textarea>

                <div class="add__comments--button-container">
                  <button-validate-form class="button-text" :onClick="checkForm">Confirmer</button-validate-form>
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
  import GoogleStreetView from './GoogleStreetView.vue';
  import ButtonValidateForm from '../side-components/ButtonValidateForm.vue';
  import SetScoreStars from '../side-components/SetScoreStars.vue';

  export default {
    name: 'add-comment-app',
    data: function() {
      return {
        comment: {
          author: '',
          comment: '',
          stars: 0
        },
        reloadComponent: 0
      }
    },
    components: {
      "google-street-view-app": GoogleStreetView,
      ButtonValidateForm,
      "set-score-app": SetScoreStars
    },
    methods: {
      // reset des valeurs des input
      restore() {
        this.comment.author = '';
        this.comment.comment = '';
        this.comment.stars = 0;
        // https://michaelnthiessen.com/force-re-render, permet de reloader le composant si une valeur du key change, donc reset du score (stars)
        this.reloadComponent += 1;
      },
      checkForm: function(e) {
        if (this.comment.author && this.comment.comment) {
          this.sendNewComment();
        } else {
          window.alert('Merci de renseigner votre prénom et votre commentaire.');
        }
        e.preventDefault();
      },
      // Envoie le nouveau commentaire au store
      sendNewComment() {
        this.$store.commit('addComment', {
          restaurantId: this.$route.params.restaurantID,
          comment: this.comment
        });
        // ferme le composant AddComment, évite de pouvoir envoyer plusieurs fois les mêmes données
        this.$router.push('"/"');
      }
    },
    computed: {
      // load les nouvelles données en fonction de l'ID du restaurant
      restaurantData() {
        // force la remise à zéro des données du formulaires
        this.restore();
        return this.$store.getters.getRestaurantById(this.$route.params.restaurantID)
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