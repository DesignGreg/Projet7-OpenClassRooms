<template>
 <div>
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
  .button__add-restaurant {
    width: 90%;
    font-size: 2rem;
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