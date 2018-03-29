<template>
  <div>
    <result-by-track v-if="this.results.tracks"
                     :key="this.searchTerm"
                     :albums="this.results.tracks"
    />
    <result-by-artist v-else-if="this.results.artists"
                      :key="this.searchTerm"
                      :albums="this.results.artists"
    />
    <result-by-album v-else-if="this.results.albums"
                     :key="this.searchTerm"
                     :albums="this.results.albums"
    />
    <result-by-user v-else-if="this.results.users"
                    :key="this.searchTerm"
                    :albums="this.results.users"
    />
    <search-result v-else-if="this.results.globals"
                   :key="this.searchTerm"
                   :albums="this.results.globals"
    />
    <h1>{{this.searchTerm}}</h1>
  </div>
</template>

<script>
    import ResultByTrack from './ResultByTrack';
    import ResultByArtist from './ResultByArtist';
    import ResultByAlbum from './ResultByAlbum';
    import ResultByUser from './ResultByUser';

    export default {
      name: 'SearchResult',
      components: { ResultByUser, ResultByAlbum, ResultByArtist, ResultByTrack },
      props: {
        searchTerm: '',
        results: {}
      }
    };
</script>

<style scoped>

</style>
