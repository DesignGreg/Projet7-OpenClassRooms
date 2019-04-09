<template>
 <div>
    <button class="button button__add-comment" type="button" v-bind:click="onClick">
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
  .button__add-comment {
    width: 90%;
    font-size: 2rem;
    border-radius: 2rem;
    background-color: #399A56;
    border: 1px solid #399A56;
    outline: none;
  }
  
  .button__add-comment:hover {
    box-shadow: 2px 2px 3px #2A2A2A;
  }
  
  .button__add-comment:active {
    box-shadow: 1px 1px 1px #2A2A2A;
  }
</style>