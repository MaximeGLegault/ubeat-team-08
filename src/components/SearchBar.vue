<template>
  <form id="main">

    <div class="bar">
      <!-- Create a binding between the searchString model and the text field -->

      <input type="text" v-model="searchString" placeholder="Enter your search terms" />
    </div>

    <ul>
      <!-- Render a li element for every entry in the computed filteredArticles array. -->

      <li v-for="product in filteredData">
        <a v-bind:href="product.productid"> Price: {{ product.price }}</a>
        <h2>{{product.name}} <span style="float:right;">Total: {{product.total}}</span></h2>


      </li>
    </ul>

  </form>
</template>

<script>
    export default {
      name: 'SearchBar'
    };
</script>

<style scoped>

</style>
