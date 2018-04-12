<template>
  <div id="app">
    <nav-menu />
    <player-bar/>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Navigation from '@/components/Navigation';
  import Player from '@/components/player/Player';
  import api from '@/lib/api';
  // import Cookies from 'js-cookie';
  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player
    },
    methods: {
      ...mapActions([
        'createNewPlaylist',
        'switchUserCurrentPlaylist'
      ]),
    },
    beforeCreate() {
      api.getTokenInfo()
        .then((value) => {
          this.$store.state.userName = value.name;
          this.$store.state.email = value.email;
        }).catch(() => {
          this.$router.push('/login');
        });
    },
    async created() {
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
          if (this.$store.state.userPlaylists[0] !== undefined) {
            this.$store.state.userCurrentSelectedPlaylist = this.$store.state.userPlaylists[0];
          }
          console.log(this.$store.state.userPlaylists[0]);
        }).catch(() => {
          this.$router.push('/login');
        });
      // todo search for playlist before creating an empty one
      // if (this.$store.state.playlists.size === 0) {
      //   const newPlaylistId = await this.createNewPlaylist('My playlist');
      //   this.switchCurrentPlaylist({ playlistId: newPlaylistId, isModifiable: true });
      // }
    },
  };

</script>

<style>
  body{
    background-color: black;
    color: #fff;
    padding: 0;
    margin: 0;
  }
  .main {
    margin-top: 60px;
    margin-bottom: 100px;
  }
</style>
