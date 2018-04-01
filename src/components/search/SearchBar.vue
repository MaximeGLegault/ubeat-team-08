<template>
  <div class="searchBar">
    <form  >
      <input @keyup.enter="goSearch" v-model="search1" id="search" type="text" placeholder="Search...">
      <a @click="goSearch"><i class="material-icons">search</i></a>
    </form>
  </div>
</template>

<script>
    export default {
      name: 'SearchBar',
      query: {
        search1: ''
      },
      methods: {
        goSearch() {
          this.$router.replace({ name: 'Search', query: { q: this.search1 } });
        }
      }
    };
</script>

<style scoped>
  a:hover{

    color: #651fff;
  }
  a{

    color: white;
    cursor: pointer;
  }
  form{
    width: 35%;
  }
</style>
