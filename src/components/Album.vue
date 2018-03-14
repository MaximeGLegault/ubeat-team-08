 <template>
   <div id="album_card">
     <albumDescription v-if="albumDescription"
                       :key="albumDescription.collectionId"
                       :description="albumDescription"
                       :albumLength="50000000"
     /><!-- TODO the album length -->
     <trackList :tracks="trackList"
     />
   </div>
</template>

<script>
  import api from '@/lib/api';
  import AlbumDescription from './AlbumDescription';
  import TrackList from './Tracklist';


  export default {
    name: 'album',
    components: {
      AlbumDescription,
      TrackList
    },

    data() {
      return {
        albumDescription: {},
        trackList: []
      };
    },

    created() {
      api.getAlbum(this.$route.params.collectionId)
        .then((value) => {
          this.albumDescription = value.results[0];
        });
      api.getTracksOfAlbum(1125488753)
        .then((value) => {
          this.trackList = value.results;
        });
    }
  };
</script>

<style>
  /*#title {*/
    /*font-size: 3rem;*/
    /*font-weight: bold;*/
  /*}*/

  /*#artist_name {*/
    /*font-size: 2rem;*/
    /*font-weight: bold;*/
  /*}*/

  /*#album_info {*/
    /*flex-flow: column wrap;*/
    /*margin-left: 16px;*/
    /*width: 60%;*/
    /*font-size: 1.25rem;*/
  /*}*/

  /*#album_description {*/
    /*flex-shrink: 1;*/
    /*overflow: hidden;*/
    /*display: -webkit-box;*/
    /*-webkit-line-clamp: 3; !*scary magic*!*/
    /*-webkit-box-orient: vertical;*/
  /*}*/

  #album_card {
    align-content: center;
    align-self: auto;
    display: flex;
    flex-flow: row wrap;
    horiz-align: center;
    margin: 5vh 10% 0;
  }

  /*#song_list {*/
    /*align-content: center;*/
    /*align-self: auto;*/
    /*margin: 0 auto 5vh;*/
    /*width: 80vw;*/
  /*}*/

  /*#song_list_table {*/
    /*margin: 0 auto auto 0;*/
    /*font-size: 1.5rem;*/
   /*}*/

  /*.song_name_column {*/
    /*text-align: left;*/
  /*}*/

  /*#song_list_table th:not(.song_name_column){*/
    /*text-align: center;*/
  /*}*/

  /*#song_list_table td:not(.song_name_column){*/
    /*text-align: center;*/
  /*}*/

  /*#song_list .btn{*/
    /*padding: 0 1rem;*/
  /*}*/

  /*.play_btn_column {*/
    /*width: 80px;*/
  /*}*/

  /*#song_list_table tr:nth-child(even) {*/
    /*background-color: #1e1e1e;*/
  /*}*/

  /*@media screen and (max-width : 1100px) {*/
    /*#album_card{*/
      /*margin: 5vh auto 0;*/
      /*display: flex;*/
      /*flex-flow: column wrap;*/
      /*width: 75%;*/
    /*}*/

    /*#album_cover {*/
      /*display: block;*/
      /*horiz-align: center;*/
      /*margin: auto;*/
    /*}*/

    /*#album_info {*/
      /*margin:auto;*/
      /*justify-content: center;*/
      /*text-align: center;*/
    /*}*/

    /*#album_description {*/
      /*width: auto;*/
    /*}*/
  /*}*/

  /*@media only screen and (min-device-width : 320px) and (max-device-width : 480px)*/
  /*and (orientation: portrait) {*/
    /*#song_list_table {*/
      /*margin: 0 auto auto 0;*/
      /*font-size: 2rem;*/
    /*}*/

    /*#album_info {*/
      /*flex-flow: column wrap;*/
      /*width: 75%;*/
      /*font-size: 1.6rem;*/
    /*}*/

    /*#title {*/
      /*font-size: 4rem;*/
      /*font-weight: bold;*/
    /*}*/

    /*#artist_name {*/
      /*font-size: 3rem;*/
      /*font-weight: bold;*/
    /*}*/
  /*}*/
</style>
