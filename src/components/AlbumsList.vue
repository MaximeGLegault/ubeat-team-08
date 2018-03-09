<template>
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
</template>

<script>
  export default {
    name: 'Artist',
    props: {
      albums: {
        type: Array,
        required: true,
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
