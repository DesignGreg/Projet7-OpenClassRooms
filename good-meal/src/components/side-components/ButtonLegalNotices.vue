<template>
  <div class="legal-notices__container">
    <button class="button button__legal-notices" type="button">
      <slot></slot>
    </button>
  </div>
</template>


<script>
  export default {
  }
</script>


<style scoped>
  @media screen and (min-width: 446px) and (max-width: 576px) {
    .button__legal-notices {
      width: 25% !important;
    }
  }
  
  @media screen and (min-width: 576px) and (max-width: 768px) {
    .button__legal-notices {
      width: 20% !important;
    }
  }
  
  @media screen and (min-width: 768px) and (max-width: 992px) {
    .button__legal-notices {
      width: 15% !important;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .button__legal-notices {
      width: 10% !important;
    }
  }

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