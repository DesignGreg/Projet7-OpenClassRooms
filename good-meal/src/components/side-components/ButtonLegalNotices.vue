<template>
 <div class="legal-notices__container">
    <button class="button button__legal-notices" type="button" v-bind:click="onClick">
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
  .legal-notices__container {
    text-align: right;
    margin-top: 0.5rem;
  }
  
  .button__legal-notices {
    width: 30%;
    padding: 0.5rem;
    font-size: 1rem;
    color: #EBEBEB;
    border-radius: 2rem;
    background-color: #2A2A2A;
    border: 1px solid #2A2A2A;
    outline: none;
  }
  
  .button__legal-notices:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }
  
  .button__legal-notices:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
</style>