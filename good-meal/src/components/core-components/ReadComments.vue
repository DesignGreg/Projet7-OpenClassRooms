<template>
  <div class="read-comments">
    <div class="container">
      <div class="row">
        <div class="aside__data" v-for="data in displayRestaurantInfo" :key="data.restaurantName">
          <div class="read-comments__left col-xl-2">
            <p> {{ data.restaurantName }} </p>
            <p> {{ data.address }} </p>
          </div>
          <div class="read-comments__right col-xl-5">
            <p> {{ data.ratings }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'read-comments-app',
    data: function() {
      return {

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
  aside__data {
    background: blue;
  }
</style>