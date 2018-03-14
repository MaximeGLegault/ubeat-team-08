<template>
  <div class="listAlbums">
    <div class="album" v-for="album of albums">
      <div class="albumJacket">
        <router-link :to="{ name : 'Album', params: { collectionId: album.collectionId }}"><img :src="artwork(album.artworkUrl100, bigArtworkDimension)"/></router-link>
      </div>
      <div class="albumJacketMobile">
        <router-link :to="{ name : 'Album', params: { collectionId: album.collectionId }}"><img :src="artwork(album.artworkUrl100, smallArtworkDimension)"/></router-link>
      </div>
      <div class="albumTitle">
        <div class="diskTitle">{{album.collectionName}}</div>
        <div class="year">{{album.releaseDate.slice(0,4)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'Artist',
    props: {
      albums: {
        type: Array,
        required: true,
      }
    },
    methods: {
      artwork(artworkUrl) {
        return util.getUrlOfBiggerAlbumArtwork(artworkUrl, 250);
      }
    }
  };
</script>

<style scoped>
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
    max-width: 250px;
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
  .albumJacketMobile{
    margin-right: 20px;
    display: none;
  }
  .albumTitle{
    margin: 0 auto;
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
    width: 250px;
    height: 250px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    .listAlbums{
      display: block;
    }
    .album {
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
      margin: 20px auto;
      justify-content: center;
      max-width: unset;
    }
    .albumJacket {
      display: none;
    }
    .albumJacketMobile{
      display: block;
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
      display: none;
    }
    .albumJacketMobile{
      display: block;
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
