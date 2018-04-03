<template>
  <div>
    <!--{{results.globals[0].artistId}}-->
    <result-by-global v-if="results.globals.length > 0"
            :key="this.searchTerm"
            :searchTerm="searchTerm"
            :results="results.globals"
    />
    <!--<result-by-track v-else-if="this.results.tracks"-->
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
    <!--{{results}}-->
  </div>
</template>

<script>
    import ResultByTrack from './ResultByTrack';
    import ResultByArtist from './ResultByArtist';
    import ResultByAlbum from './ResultByAlbum';
    import ResultByUser from './ResultByUser';
    import ResultByGlobal from './ResultByGlobal';

    export default {
      name: 'SearchResult',
      components: { ResultByGlobal, ResultByUser, ResultByAlbum, ResultByArtist, ResultByTrack },
      props: {
        searchTerm: '',
        results: {
          globals: [],
          artists: [],
          albums: [],
          tracks: [],
          users: [],
        }
      }
    };
</script>

<style scoped>

</style>
