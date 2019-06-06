<template>
  <div class="add-restaurant__margin">
    <div class="add-restaurant">
      <div class="add-restaurant__container">
        <div class="container">
          <div class="row row__first">
            <div class="col-12">
              <p class="add-restaurant__title">Ajoutez un restaurant</p>
              <router-link class="add-restaurant__link" :to='"/"'>
                <i class="fas fa-arrow-circle-down"></i>
              </router-link>
            </div>
          </div>
          <div class="row row__second">
            <div class="col-12">
              <form action="" method="post" class="add-restaurant__form">
                <div class="row row__third">
                  <div class="col-6">
                    <label class="add-restaurant__nameLabel" for="name">Nom</label>
                    <input class="add-restaurant__nameInput" size="30" type="text" name="name" id="name" v-model="newRestaurant.restaurantName" required>
                  </div>
                  <div class="col-6">
                    <label class="add-restaurant__adresseLabel" for="name">Adresse</label>
                    <textarea class="add-restaurant__adresseText" name="adresse" id="text" cols="30" rows="3" v-model="newRestaurant.address" required></textarea>
                  </div>
                </div>
                <div class="row row__fourth">
                  <div class="add-restaurant__descriptionContainer col-12">
                    <label class="add-restaurant__descriptionLabel" for="name">Description</label>
                    <textarea class="add-restaurant__descriptionText" name="description" id="text" cols="30" rows="5" v-model="newRestaurant.description" required></textarea>
                  </div>
                  <div class="add__restaurant--button-container">
                    <button-validate-form class="button-text" :onClick.self="checkForm">Confirmer</button-validate-form>
                  </div>
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
  import ButtonValidateForm from '../side-components/ButtonValidateForm.vue';

  export default {
    name: 'add-restaurant-app',
    data: function() {
      return {
        newRestaurant: {
          restaurantName: '',
          description: '',
          address: '',
          lat: null,
          long: null
        }
      }
    },
    components: {
      ButtonValidateForm
    },
    created() {
      this.newRestaurant.lat = this.$route.query.lat;
      this.newRestaurant.long = this.$route.query.lng;
    },
    methods: {
      checkForm: function(e) {
        // Contrôle les champs required du formulaire
        if (this.newRestaurant.restaurantName && this.newRestaurant.description && this.newRestaurant.address) {
          this.sendNewRestaurant();
        } else {
          window.alert('Merci de renseigner le formulaire au complet');
        }
        e.preventDefault();
      },
      sendNewRestaurant() {
        // Ajout du nouveau restaurant au Store
        this.$store.commit('addRestaurant', {
          newRestaurant: this.newRestaurant
        });
        // Ferme le composant AddRestaurant, évite de pouvoir envoyer plusieurs fois les mêmes données
        this.$router.push('"/"');

        console.log('Sent');
        console.log(this.newRestaurant.restaurantName);
        console.log(this.newRestaurant.description);
        console.log(this.newRestaurant.adresse);
        console.log(this.newRestaurant.lat);
        console.log(this.newRestaurant.long);
      },
      restore() {
        this.newRestaurant.restaurantName = '';
        this.newRestaurant.description = '';
        this.newRestaurant.adresse = '';
      },
    },
    watch: {
      '$route.query.lat'() {
        this.restore();
      }
    }
  }
</script>


<style scoped>
  .add-restaurant {
    background: #EBEBEB;
    border: 2px solid #BD0000;
    border-radius: 2rem;
    height: 300px;
    width: 100%;
  }

  .add-restaurant__container {
    margin-top: 2rem;
    width: 100%;
    height: 260px;
    overflow: auto;
  }

  .row__second {
    margin-bottom: 0;
  }

  .row__third {
    margin-bottom: 1rem;
  }

  .row__fourth {
    margin-bottom: 0;
  }

  .add-restaurant__title {
    font-size: 1.5rem;
    font-weight: bold;
    display: inline-block;
  }

  .row__second--restaurantName {
    font-size: 3rem;
  }

  .add-restaurant__nameLabel {
    display: block;
    font-size: 2rem;
  }

  .add-restaurant__nameInput {
    display: inline-block;
    height: 2rem;
  }

  .add-restaurant__adresseLabel {
    display: block;
    font-size: 2rem
  }

  .add-restaurant__adresseText {
    display: inline-block;
    width: 70%;
  }

  .add-restaurant__descriptionLabel {
    display: block;
    font-size: 2rem;
  }

  .add-restaurant__descriptionText {
    display: inline-block;
    width: 90%;
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

  .add__restaurant--button-container {
    margin: 0 auto;
  }

  .button-text {
    text-decoration: none;
    color: #EBEBEB;
    margin-top: 1.5rem;
  }
</style>