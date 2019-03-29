<template>
  <div class="footer">
    <div class="footer__info">
      <p> {{ companyName }} </p>
      <p> {{ companyAdress }} </p>
      <p> {{ companyCity }} </p>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'footer-app',
    data: function() {
      return {
        companyName: "Good Meal",
        companyAdress: "5 rue du Bon Repas",
        companyCity: "75015 Paris"
      }
    }
  }
</script>


<style>
  .footer__native {
    background: blue;
  }
</style>