<template>
  <div class="validate-add-restaurant">
    <button class="button button__validate-add-restaurant" type="button" v-bind:click="onClick">
      <slot></slot>
    </button>
  </div>
</template>


<script>
  export default {
    props: {
      onClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      button: function() {
//        axios.post('/user', {
//            firstName: 'Fred',
//            lastName: 'Flintstone'
//          })
//          .then(function(response) {
//            console.log(response);
//          })
//          .catch(function(error) {
//            console.log(error);
//          });
      }
    }
  }
</script>


<style scoped>
  .validate-add-restaurant {
    text-align: center;
    margin-top: -2rem;
  }

  .button__validate-add-restaurant {
    padding: 0.5rem;
    font-size: 1.5rem;
    color: #EBEBEB;
    border-radius: 2rem;
    background-color: #BD0000;
    border: 1px solid #BD0000;
    outline: none;
  }

  .button__validate-add-restaurant:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }

  .button__validate-add-restaurant:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
</style>