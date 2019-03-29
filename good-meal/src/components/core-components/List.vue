<template>
  <div class="aside">
    <div class="aside__container">
      <h2 class="aside__title"> {{ title }} </h2>


      <div class="aside__data" v-for="data in displayRestaurantInfo" :key="data.restaurantName">
        <ul class="aside__list">
          <li class="aside__name"> {{ data.restaurantName }} <span class="aside__score">{{ data.averageRating }}</span> </li>
          <li class="aside__description"> {{ data.description }} </li>
          
          <div class="container">
            <div class="row">
              <div class="col-xl-6">
                <li class="aside__button-read-comment"><button-read-comments :onClick="consoleClick"><router-link to='/read-comments'>Lire Commentaires</router-link></button-read-comments></li>
              </div>
              <div class="col-xl-6">
                <li class="aside__button-add-comment"><button-add-comment :onClick="consoleClick"><router-link to='/read-comments'>Ajouter commentaire</router-link></button-add-comment></li>
              </div>
              
            </div>
          </div>
          
        </ul>
      </div>

    </div>
  </div>
</template>


<script>
import ButtonReadComments from '../side-components/ButtonReadComments.vue'
  import ButtonAddComment from '../side-components/ButtonAddComment.vue'

  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants",

      }
    },
  components: {
        ButtonReadComments,
        ButtonAddComment
    
  },

    methods: {
      consoleClick() {
        console.log('GGHH')
      }
    },
    computed:  {
      displayRestaurantInfo() {
        return this.$store.getters.getRestaurantInfo;
      }
    }
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
  
  .aside__score {
    font-size: 2rem;
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
  
  .row {
    margin: 0;
  }
</style>