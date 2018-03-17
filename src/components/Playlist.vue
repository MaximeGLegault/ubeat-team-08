<template>
  <div id="playlistPage">
    <div id = "playlistName">
      <button id="addbutton" class="btn-floating waves-effect waves-light deep-purple accent-3 " v-on:click="greet"><i id = "clickButtonId" class="material-icons">add</i></button>
      <ul v-for="playlist of listPlaylists">
        <li>{{playlist.name}}</li>
      </ul>
    </div>
    <div id = "playlist">
      <h1 class="row justify-content-md-center">{{currentPlaylist.name}} </h1>
      <div id="trackList">
        <table id="trackListTable">
          <thead>
          <tr>
            <th class="playBtn"></th>
            <th class ="trackNameCol">NAME</th>
            <th class="albumNameCol">ARTIST</th>
            <th class="albumNameCol">ALBUM</th>
            <th class="time">Duration</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="track in currentPlaylist.tracks">
            <td class="playBtn">
              <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
            </td>
            <td class ="trackNameCol">{{track.trackName}}</td>
            <td class="albumNameCol">{{track.artistName}}</td>
            <td class="albumNameCol">{{track.collectionName}}</td>
            <td class="time">{{duration(track.trackTimeMillis)}}</td>
          </tr>
          </tbody>
        </table>
        <!--<p>create playlist: {{playlists}}</p>
        <p>event: {{test2}}</p>
        <p>current playlist: {{currentPlaylist}}</p>
        <p>list playlist: {{listPlaylists}}</p>
        <p>current playlist: {{currentPlaylist}}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/lib/api';
  import util from '@/lib/util';
  // import axios from 'axios';

  const startIdPlayList = '5aac58ada6d6b600042f3090';

  export default {
    data: () => ({
      playlists: {},
      test: {},
      test2: {},
      listPlaylists: [],
      currentPlaylist: {},
      timeTrack: {},
    }),
    methods: {
      async greet(event) {
        // `this` inside methods points to the Vue instance
        await api.createPlaylist('New Playlist')
          .then((value) => { this.playlists = value.data; });
        await api.getPlaylists(this.playlists.id)
          .then((value) => {
            this.test2 = value.id;
            this.listPlaylists.push(value);
          });
        // `event` is the native DOM event
        if (event) {
          console.log(event.target.id);
        }
      },
      duration(time) {
        return util.getLengthFromMilliseconds(time);
      }
    },
    async created() {
      await api.getPlaylists(`${startIdPlayList}`)
        .then((value) => {
          this.test = value.id;
          this.listPlaylists.push(value);
          this.currentPlaylist = value;
        }
     // await api.createPlaylist('ahahha')
        // .then((value) => { this.playlists = value.data; });
      // await api.getPlaylists(this.playlists.id)
        // .then((value) => {
         //  this.test = value.id;
          // this.listPlaylists.push(value.name);
        // }
        );
    }
  };

</script>

<style scoped>
  #playlistName #addbutton{
    margin-left: 0;
  }
  #playlistName ul{
    padding-left: 35px;
    margin-bottom: 0;

  }
  #playlistPage{
    margin: 0;
    padding: 0;
    display: flex;
  }
  #playlistName{
    border-right: solid 5px #111;
    padding-left: 10px;
    padding-top: 10px;
    width: 250px;
    min-width: 150px;
    min-height: 100vh;
    background-color: #191919 ;
    font-size: 1.5em;
  }
  #playlist{
    width: 100%;
  }
  #playlist h1{
    padding-left: 50px;
    padding-top: 20px;
    margin-top: 0;
    font-size: 4em;
  }
  #trackList {
    align-content: center;
    align-self: auto;
    margin: 0 auto 5vh;
    width: 100%;
  }

  #trackListTable {

    margin: 0 auto auto 0;
    font-size: 1.5rem;
  }
  .trackNameCol{
    text-align: left;
    padding-left: 20px;
    width: 40%;
  }
  .albumNameCol {
    text-align: left;
    width: 20%;
  }


  #trackList .btn{
    padding: 0 1rem;
  }
  .time{
    text-align: center;
    width: 10%;
  }
  .playBtn {
    width: 5%;
    text-align: center;
  }

  #trackListTable tr:nth-child(even) {
    background-color: #1e1e1e;
  }
</style>
