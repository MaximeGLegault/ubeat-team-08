<template>
  <div class="artist">
    <h1>{{artist.artistName}}</h1>
    <p>Genre : {{artist.primaryGenreName}}</p>
    <div class="itunes">
      <a :href="artist.artistLinkUrl"></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Artist',
    props: {
      artist: {
        type: Object,
        required: true,
      }
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
