<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="footer__component col-xl-7"></div>
        <div class="footer__native col-xl-3">
          <p> {{ companyName }} </p>
          <p> {{ companyAdress }} </p>
          <p> {{ companyCity }} </p>
        </div>
        <div class="col-xl-1"></div>
      </div>
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
  .footer__component {
    background: green;
  }
  
  .footer__native {
    background: blue;
  }
</style>