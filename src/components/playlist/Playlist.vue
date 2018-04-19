<template>
  <div id="playlistPage">

    <playlist-list :listOfPlaylist="listPlaylists"
                   v-on:clickedCurrentlyPlaying="showCurrentlyPlayingPlaylist"
                   v-on:changePlaylist="changePlaylist"/>


    <div id = "playlist">
      <div id="titlePl">
        <h1>{{this.$store.state.userCurrentSelectedPlaylist.name}} </h1>

        <button v-on:click="toggleEdit" id="editBtn" class="btn-floating waves-effect waves-light black ">
          <i class="material-icons">mode_edit</i>
        </button>

        <div v-show="showSectionEdit" id = "editDiv">
          <div class="input-field col s6">
            <input id="pl_name" type="text" v-model="inputNameEdit" placeholder="Playlist's Name">
          </div>
          <a id="checkBtn" class="waves-effect btn-flat " v-on:click="editNamePlaylist"><i class="material-icons left">check</i></a>
        </div>
      </div>

      <tracklist :tracks="tracks"
                 :show-artist="true"
                 :show-album="true"/>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import { mapActions } from 'vuex';
  import api from '@/lib/api';
  import playlistList from './PlaylistList';
  import tracklist from '../tracklist/Tracklist';

  export default {
    name: 'playlist',

    components: {
      'playlist-list': playlistList,
      tracklist,
    },

    data: () => ({
      listPlaylists: [],
      showSectionEdit: false,
      inputNameEdit: '',
      tracks: [],
    }),

    methods: {

      ...mapActions([
        'switchUserCurrentPlaylist',
        'createNewPlaylist',
        'updatePlaylistName',
        'addTrackToCurrentPlaylist',
        'editPlaylistName',
        'addSongToCurrentPlaylist'
      ]),

      toggleEdit() {
        this.showSectionEdit = !this.showSectionEdit;
      },

      addNewPlaylist() {
        this.createNewPlaylist('New Playlist', this.$store.state.email);
      },

      changePlaylist(id) {
        this.switchUserCurrentPlaylist(id);
        this.tracks = this.$store.state.userCurrentSelectedPlaylist.tracks;
      },

      async editNamePlaylist() {
        const bkp = this.$store.state.userCurrentSelectedPlaylist.tracks;
        await this.editPlaylistName({ playlistId: this.$store.state.userCurrentSelectedPlaylist.id,
          newName: this.inputNameEdit });
        bkp.forEach((track) => {
          this.addSongToCurrentPlaylist(track);
        });
        await api.getAllPlaylists()
          .then((value) => {
            const list = value;
            const listPlUser = [];
            list.forEach((keys) => {
              if (keys.owner !== undefined) {
                if (keys.owner.email === this.$store.state.email) {
                  listPlUser.push(keys);
                }
              }
            });
            this.$store.state.userPlaylists = listPlUser;
          }).catch(() => {
            this.$router.push('/login');
          });
      },

      showCurrentlyPlayingPlaylist() {

      },
    },

    computed: {
      currentPlaylist() {
        return this.$store.state.userCurrentSelectedPlaylist;
      }
    },

    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    }
  };

</script>

<style scoped>
  #playlistPage{
    margin: 0;
    padding: 0;
    display: flex;
    text-align: center;
  }

  input[type=text]:not(.browser-default):focus:not([readonly])+label{
    color: white;
    border-bottom: white;
    box-shadow: white;
  }
  input[type=text]:not(.browser-default):focus:not([readonly]){
    border-bottom: white;
    box-shadow: white;
  }
  #editDiv{
    display: flex;
  }
  #checkBtn{
    margin-top: 20px;
    width: 10px;
    padding-left: 10px;
  }
  #checkBtn:hover{
    color: white;
  }
  #titlePl{
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: baseline;
  }
  #editBtn{
    align-self: flex-start;

  }
  #editBtn i{
    color: #343434;
  }
  #editBtn i:hover{
    color: white;
  }
  .listPlName{
    color: white;
    cursor: pointer;
  }
  .listPlName:hover{
    color: #651fff;
  }

  #playlist{
    width: 100%;
  }
  #playlist h1{
    padding-left: 20px;
    padding-top: 20px;
    margin-top: 0;
    font-size: 4em;
  }
  #trackList {
    align-content: center;
    align-self: auto;
    margin: 0 auto 20vh;
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
  .artistNameCol {
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
  #addbuttonSm{
    display: none;
  }
  #addbutton{
    display: unset;
    margin-bottom: 5px;
  }

  #trackListTable tr:nth-child(even) {
    background-color: #1e1e1e;
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    #trackListTable{
      font-size: 2em;
    }
    .albumNameCol{
      display: none;
    }
    #playlist{
      padding-top: 50px;
    }
    #playlistName{
      font-size: 2em;
    }
    #playlistName ul{
      padding-left: 0;
    }
    #addbuttonSm{
      margin-bottom: 10px;
      display: unset;

    }
    #addbuttonSm i{
      font-size: 3em;

    }
    #addbutton {
      display: none;
    }
  }
  @media screen and (max-width: 798px){
    .albumNameCol{
      display: none;
    }
    #playlist{
      padding-top: 30px;
    }
    #playlistName ul{
      padding-left: 5px;
    }
    #addbutton{
      margin-bottom: 10px;
    }
  }
</style>
