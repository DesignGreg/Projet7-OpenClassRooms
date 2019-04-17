<template>
  <div class="aside">
    <h2 class="aside__title"> {{ title }} </h2>
    <div class="aside__main-container">
      <div class="aside__second-container">
        <single-restaurant-app></single-restaurant-app>
      </div>
    </div>
  </div>
  
</template>


<script>
  import SingleRestaurant from './SingleRestaurant.vue';


  export default {
    name: 'header-app',
    data: function() {
      return {
        title: "Restaurants",

      }
    },
    components: {
      "single-restaurant-app": SingleRestaurant,
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

</style>