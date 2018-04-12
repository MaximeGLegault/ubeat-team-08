<template>
<div class="main">
  <artistDescription v-if="this.artist"
          :key="this.artist.artistId"
          :artist="this.artist"
  />
  <albumsList v-if="this.albums"
              :key="this.albums.collectionId"
              :albums="this.albums"
  />
</div>
</template>

<script>
  import api from '@/lib/api';
  import AlbumsList from './AlbumsList';
  import ArtistDescription from './ArtistDescription';

  export default {
    name: 'Artist',
    components: {
      AlbumsList,
      ArtistDescription
    },
    data() {
      return {
        artist: {},
        albums: []
      };
    },

    async created() {
      await api.getArtist(this.$route.params.artistId)
        .then((value) => {
          this.artist = value.results[0];
        }).catch((error) => {
          if (error.response.status === 401) {
            window.location = '#/login';
          }
        });
      await api.getAlbums(this.$route.params.artistId)
        .then((value) => {
          this.albums = value.results;
          this.albums.sort((album1, album2) =>
            album2.releaseDate.slice(0, 4) - album1.releaseDate.slice(0, 4));
        }).catch((error) => {
          if (error.response.status === 401) {
            window.location = '#/login';
          }
        });
    }
  };
</script>

<style scoped>

</style>
