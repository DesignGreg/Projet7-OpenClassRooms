<template>
 <div class="validate">
    <button class="button button__validate" type="button" @click="onClick">
      <slot>Button</slot>
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
  .validate {
    text-align: center;
    margin-top: -2rem;
  }
  
  .button__validate {
    padding: 0.5rem;
    font-size: 1.5rem;
    color: #EBEBEB;
    border-radius: 2rem;
    background-color: #BD0000;
    border: 1px solid #BD0000;
    outline: none;
  }
  
  .button__validate:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }
  
  .button__validate:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
</style>