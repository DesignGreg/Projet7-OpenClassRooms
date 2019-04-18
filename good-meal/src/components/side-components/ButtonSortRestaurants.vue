<template>
 <div>
    <button class="button button__read-comments" type="button" v-bind:click="onClick">
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
  .button__read-comments {
    width: 100%;
    padding: 0.5rem;
    font-size: 2rem;
    border-radius: 2rem;
    background-color: #BD0000;
    border: 1px solid #BD0000;
    outline: none;
    font-size: 1.5rem;
    text-decoration: none;
    color: #EBEBEB;
  }
  
  .button__read-comments:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }
  
  .button__read-comments:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
  
</style>