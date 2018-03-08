<template>
<div class="bodyArtist">
  <div class="artist">
    <h1>{{this.artist.artistName}}</h1>
    <p>Genre : {{this.artist.primaryGenreName}}</p>
    <div class="itunes">
      <a :href="this.artist.artistLinkUrl"></a>
    </div>
  </div>
  <div class="listAlbums">
    <div class="album" v-for="album of albums">
      <div class="albumJacket">
        <img :src="album.artworkUrl100"/>
      </div>
      <div class="albumTitle">
        <div class="diskTitle">{{album.collectionName}}</div>
        <div class="year">{{album.releaseDate.slice(0,4)}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  /* eslint-disable */
  import * as api from '@/api';

  export default {
    component: 'Artist',

    data: () => ({
      artist: [],
      albums: []
    }),

    methods: {

    },

    async created() {
      this.artist = await api.getArtist(3996865);
      this.albums = await api.getAlbums(3996865);
      this.albums = this.albums.sort((obj1, obj2) => {
        return obj2.releaseDate.slice(0,4) - obj1.releaseDate.slice(0,4);
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
  .listAlbums{
    margin: auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    text-align: center;
    justify-content: center;

  }
  .album{
    margin: 20px 15px 15px 15px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
  }
  .albumJacket{
  }
  .albumTitle{
    margin: 0 auto;
    width: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    font-weight: bold;
  }
  .diskTitle{
    width: 100%;
    font-size: 1rem;
    text-align: left;
    color: white;
    margin: 0;
  }
  .year{
    width: 100%;
    color: #e5e5e5;
    font-size: 0.8rem;
    text-align: left;
  }
  img {
    object-fit: contain;
    width: 200px;
    height: 200px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .listAlbums{
      display: block;
    }
    .album{
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      margin: 20px auto;
      justify-content: center;
      max-width: unset;
    }
    .albumJacket {
      width: auto;
      margin-right: 20px;
      height: auto;
    }
    .albumTitle {
      /*max-width: 50%;*/
    }
    .diskTitle {
      font-size: 2rem;
    }
    .year {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.6rem;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (min-device-width : 568px) and (max-device-width : 853px)
  and (orientation: landscape){
    .album{
      flex-direction: row;
      flex-wrap: nowrap;
      width: 50%;
      margin: 20px auto;
      justify-content: center;
      max-width: unset;
    }
    .albumJacket {
      margin-right: 10px;
    }
    img {
      width: 150px;
      height: 150px;
    }
    .diskTitle {
      font-size: 1.5rem;
    }
    .year {
      font-size: 1.15rem;
    }
  }
</style>
