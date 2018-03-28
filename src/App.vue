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

  export default {
    name: 'app',

    components: {
      'nav-menu': Navigation,
      'player-bar': Player
    },
    methods: {
      ...mapActions([
        'createNewPlaylist',
        'switchCurrentPlaylist'
      ]),
    },
    async created() {
      // todo search for playlist before creating an empty one
      const newPlaylistId = await this.createNewPlaylist('My playlist');
      this.switchCurrentPlaylist({ playlistId: newPlaylistId, isModifiable: true });
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
</style>
