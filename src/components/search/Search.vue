<template>
  <div class="main" v-bind:key="this.researchTerm">
    <search-bar v-on:update="searchTerm = search"/>
    <search-result v-if="this.results"
                   :key="this.searchTerm"
                   :searchTerm="this.searchTerm"
                   :results="this.results"
    />
  </div>
</template>

<script>
    import api from '@/lib/api';
    import SearchBar from './SearchBar';
    import SearchResult from './SearchResult';

    export default {
      name: 'Search',
      components: {
        SearchResult,
        SearchBar
      },
      data() {
        return {
          searchTerm: '',
          resultCount: '',
          results: {
            globals: [],
            artists: [],
            albums: [],
            tracks: [],
            users: [],
          }
        };
      },
      async created() {
        this.searchTerm = this.$route.query.q;
        await api.getSearch(this.$route.query.q, 20)
          .then((value) => {
            this.results.globals = value.results;
            this.resultCount = value.resultCount;
          });
      },
      async updated() {
        this.searchTerm = this.$route.query.q;
        await api.getSearch(this.$route.query.q)
          .then((value) => {
            this.results.globals = value.results;
            this.resultCount = value.resultCount;
          });
      },
    };
</script>

<style scoped>
  .info{
    width: 100%;
    font-size: 1.5rem;
    text-align: left;
    color: white;
    margin: 0;
  }
</style>
