<template>
  <div class="score__container" ref="score-container">
    <span class="full-star fa fa-star checked" v-for="(star, key) in starNumber"></span>
    <span class="empty-star fa fa-star" v-for="(star, key) in starEmpty"></span>
  </div>
</template>


<script>
  export default {

    name: "score-app",
    props: {
      starNumber : {
        type: Number,
        default: 0
      }
    },
    computed: {
      starEmpty () {
        // starNumber = comment.stars
        return 5 - this.starNumber
      }
    }

  }
</script>


<style scoped>
  .score__container {
    display: inline-block;
  }
  
  .full-star {
    color: #BD0000;
  }
  
  .empty-star {
    color: #2A2A2A;
  }
</style>