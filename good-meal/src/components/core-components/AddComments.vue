<template>
  <div class="add-comments">
    <form action="" method="post" class="add-comments__form">
      <label for="name">Prénom</label>
      <input type="text" name="name" id="name" v-model="nom" required>
      <select name="stars" id="ratings" v-model="selected" required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea name="comment" id="text" cols="30" rows="10" v-model="commentaire" required></textarea>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'add-comment-app',
    data: function() {
      return {
        nom: 'Votre prénom',
        selected: '3',
        commentaire: 'Votre commentaire'
      }
    }
  }
</script>


<style scoped>

</style>