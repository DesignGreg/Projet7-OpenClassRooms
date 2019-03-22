<template>
 <div>
    <button class="button button-add-comment" v-bind:click="onClick"></button>
    <slot></slot>
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

</style>