<template>
  <div>
    <div id="album_cover">
      <img :src="artwork">
    </div>
    <div id="album_info">
      <h1 id="title">{{description.collectionName}}</h1>
      <p id="artist_name">{{description.artistName}}</p>
      <p>{{year}} • {{description.trackCount}} songs • {{length}} • Rock</p>
      <!--<a href="https://geo.itunes.apple.com/ca/album/master-of-puppets-remastered/1275600311?mt=1&app=music&itscg=30200&itsct=afftoolset_1" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>-->
    </div>
  </div>
</template>

<script>
    export default {
      name: 'albumDescription',
      props: {
        description: {
          type: Object,
          required: true,
        },
        albumLength: {
          type: Number,
          required: false,
        }
      },
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
            const element = this.description.artworkUrl100.split('/');
            element[element.length - 1] = element[element.length - 1].replace('100x100', '268x268');
            return element.join('/');
          }
          return '';
        },
        length() {
          if (this.albumLength) {
            const time = new Date(this.albumLength);
            const hours = time.getUTCHours();
            const minutes = time.getUTCMinutes();
            const seconds = time.getUTCSeconds();
            const string = `${hours ? `${hours}:` : ''}${hours || minutes ? minutes : ''}:${seconds}`;
            return string;
          }
          return '';
        }
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

  #album_description {
    flex-shrink: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /*scary magic*/
    -webkit-box-orient: vertical;
  }

  #album_card {
    align-content: center;
    align-self: auto;
    display: flex;
    flex-flow: row wrap;
    horiz-align: center;
    margin: 5vh 10% 0;
  }

  #song_list {
    align-content: center;
    align-self: auto;
    margin: 0 auto 5vh;
    width: 80vw;
  }

  #song_list_table {
    margin: 0 auto auto 0;
    font-size: 1.5rem;
  }

  .song_name_column {
    text-align: left;
  }

  #song_list_table th:not(.song_name_column){
    text-align: center;
  }

  #song_list_table td:not(.song_name_column){
    text-align: center;
  }

  #song_list .btn{
    padding: 0 1rem;
  }

  .play_btn_column {
    width: 80px;
  }

  #song_list_table tr:nth-child(even) {
    background-color: #1e1e1e;
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
    #song_list_table {
      margin: 0 auto auto 0;
      font-size: 2rem;
    }

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
