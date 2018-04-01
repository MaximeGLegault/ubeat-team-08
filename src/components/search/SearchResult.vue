<template>
  <div>
    {{results.globals[0].artistId}}
    <result v-if="results.globals"
            :key="searchTerm"
            :globals="results.globals"
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
    import Result from './Result';

    export default {
      name: 'SearchResult',
      components: { Result, ResultByUser, ResultByAlbum, ResultByArtist, ResultByTrack },
      props: {
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
