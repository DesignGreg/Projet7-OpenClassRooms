<template>
  <div class="read-comments">
    <div class="container">
      <div class="row">
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
</template>


<script>
  const axios = require('axios');

  export default {
    name: 'read-comments-app',
    data: function() {
      return {
        info: null
      }
    },
    mounted: function() {
      axios
        .get('http://localhost:8080/restaurantList.json')
        .then(response => (this.info = response.data))
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        })
        .then(function() {

        })
    }
  }
</script>

<style scoped>

</style>