<template>
  <div>
    <h1>{{this.searchTerm}}</h1>
    <search-bar v-if="this.searchTerm"/>
    <search-result v-if="this.results"
                :key="this.searchTerm"
                :albums="this.results"
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
        this.searchTerm = this.$route.params.searchTerm;
        await api.getSearch(this.$route.params.searchTerm)
          .then((value) => {
            this.results.globals = value.results;
            this.resultCount = value.resultCount;
          });
      }
    };
</script>

<style scoped>

</style>
