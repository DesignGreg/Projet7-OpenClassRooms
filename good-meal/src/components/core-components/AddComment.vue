<template>
  <div class="add-comment__margin">
    <div class="add-comment">
      <div class="add-comment__container">
        <div class="container">
          <div class="row row__first">
            <div class="col-xl-12">
              <p class="add-comment__title">Laissez votre avis...</p>
            </div>
          </div>
          <div class="row row__second">
            
          <div class="col-xl-4">
            <p class="row__second--restaurantName"> {{ restaurantData.restaurantName }}</p>
          </div>

            <div class="col-xl-8">
              <form action="" method="post" class="add-comment__form">
                <label class="add-comment__nameLabel" for="name">Prénom</label>
                <input class="add-comment__nameInput" type="text" name="name" id="name" v-model="nom" required>
                <label class="add-comment__scoreLabel" for="stars">Note</label>
                <select class="add-comment__scoreSelect" name="stars" id="ratings" v-model="selected" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <label class="add-comment__textLabel" for="comment">Commentaire</label>
                <textarea class="add-comment__text" name="comment" id="text" cols="30" rows="10" v-model="commentaire" required></textarea>
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
  
  export default {
    name: 'add-comment-app',
    data: function() {
      return {
        nom: 'Votre prénom',
        selected: '3',
        commentaire: 'Votre commentaire',
        restaurantData: []
      }
    },
    mounted() {
      axios.get('http://localhost:8080/restaurantList.json').then((response) => {
        this.restaurantData = response.data[this.$route.params.restaurantID];
      }, (err) => {
        console.log(err);
        return false;
      });
    },
  }
</script>


<style scoped>
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
    height: 300px;
    overflow: auto;
  }
  
  .add-comment__title {
    font-size: 2rem;
    font-weight: bold;
  }
  
  .row__second--restaurantName {
    font-size: 3rem;
  }
  
  .add-comment__nameLabel {
    display: block;
    font-size: 2rem;
  }
  
  .add-comment__nameInput {
    display: inline-block;
  }
  
  .add-comment__scoreLabel {
    display: inline-block;
    font-size: 2rem;
    margin-left: 4rem;
  }
  
  .add-comment__scoreSelect {
    display: inline-block;
    margin-left: 0.5rem;
  }
  
  .add-comment__textLabel {
    display: block;
    font-size: 2rem;
    margin-top: 1rem;
  }
  
  .add-comment__text {
    width: 100%;
  }
</style>