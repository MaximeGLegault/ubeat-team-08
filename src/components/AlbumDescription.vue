<template>
  <div id="album_card">
    <div id="album_cover">
      <img :src="artwork">
    </div>
    <div id="album_info">
      <h1 id="title">{{description.collectionName}}</h1>
      <p id="artist_name">{{description.artistName}}</p>
      <p>{{year}} • {{description.trackCount}} songs • {{description.albumLength}} • Rock</p>
      <!--<a href="https://geo.itunes.apple.com/ca/album/master-of-puppets-remastered/1275600311?mt=1&app=music&itscg=30200&itsct=afftoolset_1" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>-->
    </div>
  </div>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'albumDescriptionDataObject',
    props: ['description'],
    computed: {
      year() {
        if (this.description.releaseDate) {
          const date = new Date(this.description.releaseDate);
          return date.getFullYear();
        }
        return '-';
      },
      artwork() {
        if (this.description.artworkUrl100) {
          return util.getUrlOfBiggerAlbumArtwork(this.description.artworkUrl100, 268);
        }
        return '';
      },
    }
  };
</script>

<style scoped>
  #title {
    font-size: 3rem;
    font-weight: bold;
  }

  #artist_name {
    font-size: 2rem;
    font-weight: bold;
  }

  #album_info {
    flex-flow: column wrap;
    margin-left: 16px;
    width: 60%;
    font-size: 1.25rem;
  }

  #album_card {
    align-content: center;
    align-self: auto;
    display: flex;
    flex-flow: row wrap;
    horiz-align: center;
    margin: 5vh 10% 0;
  }

  @media screen and (max-width : 1100px) {
    #album_card{
      margin: 5vh auto 0;
      display: flex;
      flex-flow: column wrap;
      width: 75%;
    }

    #album_cover {
      display: block;
      horiz-align: center;
      margin: auto;
    }

    #album_info {
      margin:auto;
      justify-content: center;
      text-align: center;
    }

    #album_description {
      width: auto;
    }
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait) {

    #album_info {
      flex-flow: column wrap;
      width: 75%;
      font-size: 1.6rem;
    }

    #title {
      font-size: 4rem;
      font-weight: bold;
    }

    #artist_name {
      font-size: 3rem;
      font-weight: bold;
    }
  }
</style>
