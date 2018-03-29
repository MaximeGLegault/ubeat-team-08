<template>
  <div>
    <result v-if="results.globals"
            :key="searchTerm"
            :results="results.globals"
    />
    <!--<result-by-track v-if="this.results.tracks"-->
                     <!--:key="this.searchTerm"-->
                     <!--:results="this.results.tracks"-->
    <!--/>-->
    <!--<result-by-artist v-else-if="this.results.artists"-->
                      <!--:key="this.searchTerm"-->
                      <!--:results="this.results.artists"-->
    <!--/>-->
    <!--<result-by-album v-else-if="this.results.albums"-->
                     <!--:key="this.searchTerm"-->
                     <!--:results="this.results.albums"-->
    <!--/>-->
    <!--<result-by-user v-else-if="this.results.users"-->
                    <!--:key="this.searchTerm"-->
                    <!--:results="this.results.users"-->
    <!--/>-->
    <!--<search-result v-else-if="this.results.globals"-->
                   <!--:key="this.searchTerm"-->
                   <!--:results="this.results.globals"-->
    <!--/>-->
    <!--{{results}}-->
  </div>
</template>

<script>
    import ResultByTrack from './ResultByTrack';
    import ResultByArtist from './ResultByArtist';
    import ResultByAlbum from './ResultByAlbum';
    import ResultByUser from './ResultByUser';
    import Result from './Result';

    export default {
      name: 'SearchResult',
      components: { Result, ResultByUser, ResultByAlbum, ResultByArtist, ResultByTrack },
      props: {
        searchTerm: '',
        results: {}
      },
      async created() {
        this.searchTerm = this.$route.query.q;
      }
    };
</script>

<style scoped>

</style>
