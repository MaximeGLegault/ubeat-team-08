<template>
    <div id="player">
       <Aplayer v-if="currentTrack"
                :music.sync="currentTracks"
                :list="currentTracks"
                :autoplay="true"
                theme="#e1e1e1"
                mode="circulation" />
    </div>
</template>

<script>
  import util from '@/lib/util';
  import Aplayer from 'vue-aplayer';

  export default {
    components: {
      Aplayer,
    },
    computed: {
      currentTrack() {
        if (this.$store.state.currentPlaylist &&
          this.$store.state.currentPlaylist.tracks &&
          this.$store.state.currentPlaylist.tracks.length > 0) {
          return true;
        }
        return false;
      },
      currentTracks() {
        if (this.$store.state.currentPlaylist &&
          this.$store.state.currentPlaylist.tracks &&
          this.$store.state.currentPlaylist.tracks.length > 0) {
          return util.getMusicInfo(this.$store.state.currentPlaylist.tracks);
        }
        return [];
      }
    }
  };
</script>

<style scoped>
  #player {
    background-color: #1e1e1e;
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
  }
</style>
