<template>
  <div id = "playlistName">
    <ul>
      <li>
        <a class="listPlName" v-on:click="$emit('clickedCurrentlyPlaying')">Currently playing</a>
      </li>
    </ul>

    <hr/>

    <button id="addbutton"
            class="btn-floating waves-effect waves-light deep-purple accent-3"
            v-on:click="$emit('addNewPlaylist')">
      <i id = "clickButtonId" class="material-icons">add</i>
    </button>

    <button id="addbuttonSm"
            class="btn-floating waves-effect waves-light btn-large deep-purple accent-3"
            v-on:click="$emit('addNewPlaylist')">
      <i class="material-icons">add</i>
    </button>

    <ul id="ulOfPlaylist"
        v-for="playlist in this.$store.state.userPlaylists">
      <li>
        <a class="listPlName"
           v-bind:id="playlist.id"
           v-on:click="$emit('changePlaylist', playlist.id)">
          {{playlist.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: 'playlistList',
      props: {
        listOfPlaylist: {
          required: true,
          type: Array,
        }
      }
    };
</script>

<style scoped>
  ul {
    margin-bottom: 0;
  }

  #playlistName {
    border-right: solid 5px #111;
    padding: 10px 10px;
    width: 250px;
    min-width: 150px;
    min-height: 100vh;
    background-color: #191919 ;
    font-size: 1.5em;
  }

  .listPlName{
    color: white;
    cursor: pointer;
  }

  .listPlName:hover{
    color: #651fff;
  }

  #addbuttonSm{
    display: none;
  }

  #addbutton{
    display: inline;
    margin-bottom: 5px;
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
