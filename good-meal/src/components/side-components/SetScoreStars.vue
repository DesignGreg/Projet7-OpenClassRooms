<template>
  <div class="star-rating">
    <fieldset>
      <input type="radio" id="star5" name="rating" value="5" @input="chooseScore(5)"/><label for="star5" title="Outstanding">5 stars</label>
      <input type="radio" id="star4" name="rating" value="4" @input="chooseScore(4)"/><label for="star4" title="Very Good">4 stars</label>
      <input type="radio" id="star3" name="rating" value="3" @input="chooseScore(3)"/><label for="star3" title="Good">3 stars</label>
      <input type="radio" id="star2" name="rating" value="2" @input="chooseScore(2)"/><label for="star2" title="Poor">2 stars</label>
      <input type="radio" id="star1" name="rating" value="1" @input="chooseScore(1)"/><label for="star1" title="Very Poor">1 star</label>
    </fieldset>
  </div>
</template>


<script>
  export default {
    name: "set-score-app",

    data: function() {
      return {

      }
    },
    methods: {
      chooseScore (value) {
        this.$emit('input', value)
      }
    },
    computed: {
      // Détecter les étoiles avec checked, et pouvoir envoyer ce score dans le store au moment de la validation du commentaire
    }

  }
</script>


<style scoped>
  @media screen and (min-width: 446px) and (max-width: 576px) {
    .star-rating {
      margin-left: 0 !important;
    }
  }

  .star-rating {
    font-family: 'FontAwesome';
    display: inline;
    margin-left: 3rem;
    line-height: 1;
    vertical-align: sub;
  }

  .star-rating>fieldset {
    border: none;
    display: inline-block;
  }

  .star-rating>fieldset:not(:checked)>input {
    position: absolute;
    top: -9999px;
    clip: rect(0, 0, 0, 0);
  }

  .star-rating>fieldset:not(:checked)>label {
    float: right;
    width: 1em;
    padding: 0 .05em;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 180%;
    color: #BD0000;
  }

  .star-rating>fieldset:not(:checked)>label:before {
    content: '\f006 ';
  }

  .star-rating>fieldset:not(:checked)>label:hover,
  .star-rating>fieldset:not(:checked)>label:hover~label {
    color: #BD0000;
    text-shadow: 0 0 3px #1abc9c;
  }

  .star-rating>fieldset:not(:checked)>label:hover:before,
  .star-rating>fieldset:not(:checked)>label:hover~label:before {
    content: '\f005 ';
  }

  .star-rating>fieldset>input:checked~label:before {
    content: '\f005 ';
  }

  .star-rating>fieldset>label:active {
    position: relative;
    top: 2px;
  }

/*
  body {
    background: #262829;
    color: #95a5a6;
    font-family: 'Raleway';
    text-align: center;
  }

  body p {
    font-size: 1.6em;
    margin: auto;
    width: 80%;
  }

  body a {
    color: #BD0000;
  }
*/
</style>