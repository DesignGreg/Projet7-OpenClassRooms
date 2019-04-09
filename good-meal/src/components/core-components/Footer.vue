<template>
  <div class="footer">
   <button-add-restaurant>Ajouter restaurant</button-add-restaurant>
    <div class="footer__info">
      <p class="footer__info--companyName"> {{ companyName }} </p>
      <p class="footer__info--companyAddress"> {{ companyAddress }} </p>
      <p class="footer__info--companyCity"> {{ companyCity }} </p>
    </div>
    <div class="footer__legalNotices">
    </div>
  </div>
</template>


<script>
  import ButtonAddRestaurant from '../side-components/ButtonAddRestaurant.vue';
  
  export default {
    name: 'footer-app',
    data: function() {
      return {
        companyName: "Good Meal",
        companyAddress: "5 rue du Bon Repas",
        companyCity: "75015 Paris"
      }
    },
    components: {
      ButtonAddRestaurant
    }
  }
</script>


<style>
  .footer__info {
    
  }
  
  .footer__info--companyName {
    font-size: 2rem;
    color: #EBEBEB;
  }
  
  .footer__info--companyAddress {
    font-size: 2rem;
    color: #EBEBEB;
  }
  
  .footer__info--companyCity {
    font-size: 2rem;
    color: #EBEBEB;
  }
</style>