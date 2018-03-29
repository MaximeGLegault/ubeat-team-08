<template>
  <form id="main">

    <div class="bar">
      <!-- Create a binding between the searchString model and the text field -->

      <input type="text" v-model="searchString" placeholder="Enter your search terms" />
    </div>
  </form>
</template>

<script>
    export default {
      name: 'SearchBar'
    };
</script>

<style scoped>

</style>
