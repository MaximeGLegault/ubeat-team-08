<template>
<div>
  <div class="artist">
    <h1>{{this.artist.artistName}}</h1>
    <p>Genre : {{this.artist.primaryGenreName}}</p>
    <div class="itunes">
      <a :href="this.artist.artistLinkUrl"></a>
    </div>
  </div>
  <albumsList v-if="this.albums"
              :key="this.albums.collectionId"
              :albums="this.albums"
  />
</div>
</template>

<script>
  import api from '@/lib/api';
  import AlbumsList from './AlbumsList';

  export default {
    name: 'Artist',
    components: { AlbumsList },
    data() {
      return {
        artist: {},
        albums: {}
      };
    },

    async created() {
      await api.getArtist(3996865)
        .then((value) => {
          this.artist = value.results[0];
        });
      await api.getAlbums(3996865)
        .then((value) => {
          this.albums = value.results;
          this.albums.sort((album1, album2) =>
            album2.releaseDate.slice(0, 4) - album1.releaseDate.slice(0, 4));
        });
    }
  };
</script>

<style scoped>
  h1{
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
    margin: 20px 20px 0 20px;
  }
  p{
    font-size: 1rem;
    margin: 0 20px 10px 20px;
  }
  .artist{
    text-align: center;
    margin: 20px 20px 10px 20px;

  }
  .itunes {
    margin: 0 0 0 0;
    max-height: 70px;
    display: inline-block;
    overflow: hidden;
    background: url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;
    width: 157px;
    height: 45px;
    background-size: contain;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
</style>
