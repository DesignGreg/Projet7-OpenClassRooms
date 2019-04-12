<template>
  <div class="footer">
   <button-add-restaurant  :onClick="button"><router-link class="button-text" :to='"/add-restaurant/"'>Ajouter restaurant</router-link></button-add-restaurant>
    <div class="footer__info">
      <p class="footer__info--companyName"> {{ companyName }} </p>
      <p class="footer__info--companyAddress"> {{ companyAddress }} </p>
      <p class="footer__info--companyCity"> {{ companyCity }} </p>
    </div>
    <div class="footer__legalNotices">
    <button-legal-notices>Mentions Légales</button-legal-notices>
    </div>
  </div>
</template>


<script>
  import ButtonAddRestaurant from '../side-components/ButtonAddRestaurant.vue';
  import ButtonLegalNotices from '../side-components/ButtonLegalNotices.vue';
  
  export default {
    name: 'footer-app',
    data: function() {
      return {
        companyName: "Good Meal",
        companyAddress: "5 rue du Bon Repas",
        companyCity: "75015 Paris"
      }
    },
    methods: {
      button: function() {
        console.log('Working');
      }
    },
    components: {
      ButtonAddRestaurant,
      ButtonLegalNotices
    }
  }
</script>


<style scoped>
  .footer__info {
    margin-top: 1rem;
    text-align: right;
  }
  
  .footer__info--companyName {
    font-size: 1.5rem;
    color: #EBEBEB;
  }
  
  .footer__info--companyAddress {
    font-size: 1.5rem;
    color: #EBEBEB;
  }
  
  .footer__info--companyCity {
    font-size: 1.5rem;
    color: #EBEBEB;
  }
  
  .button-text {
    font-size: 1.5rem;
    text-decoration: none;
    color: #EBEBEB;
  }
</style>