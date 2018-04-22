<template>
  <div id="app">
    <nav-menu />
    <player-bar v-show="showPlayer"/>
    <router-view/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Navigation from '@/components/Navigation';
  import Player from '@/components/player/Player';
  import api from '@/lib/api';
  import util from '@/lib/util';

  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player
    },
    data() {
      return {
        showPlayer: false
      };
    },
    methods: {
      ...mapActions([
        'updateUserFromToken'
      ]),
    },
    async created() {
      await this.updateUserFromToken()
        .then(() => {
          api.getAllPlaylists()
            .then((value) => {
              this.$store.state.userPlaylists =
                util.getPlaylistsOfUser(value, this.$store.state.connectedUser.id);
            });
        })
        .catch(() => {
          this.$router.push('/login');
        });
    },
    mounted() {
      this.$root.$on('newPlayRequested', () => {
        this.showPlayer = true;
      });
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
