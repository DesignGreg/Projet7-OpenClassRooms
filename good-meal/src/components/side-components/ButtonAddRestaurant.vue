<template>
  <div class="add-restaurant__container">
    <button class="button button__add-restaurant" type="button" v-bind:click="onClick">
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
    }
  }
</script>


<style scoped>
  @media screen and (min-width: 446px) and (max-width: 576px) {
    .button__add-restaurant {
      width: 50% !important;
    }
    .add-restaurant__container {
      margin-top: 1rem !important;
    }
  }
  
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .button__add-restaurant {
      width: 30% !important;
    }
    .add-restaurant__container {
      margin-top: 1rem !important;
    }
  }
  
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    .button__add-restaurant {
      width: 20% !important;
    }
    .add-restaurant__container {
      margin-top: 1rem !important;
    }
  }

  .add-restaurant__container {
    text-align: center;
    margin-top: -2rem;
  }

  .button__add-restaurant {
    width: 50%;
    padding: 0.5rem;
    font-size: 2rem;
    color: #EBEBEB;
    border-radius: 2rem;
    background-color: #BD0000;
    border: 1px solid #BD0000;
    outline: none;
  }

  .button__add-restaurant:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }

  .button__add-restaurant:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
</style>