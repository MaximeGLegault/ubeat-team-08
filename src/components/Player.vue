<template>
    <div id="player">
       <Aplayer v-if="shown"
                :music.sync="currentTrack"
                :list="currentTracks"
                :autoplay="true"
                :theme="'#e1e1e1'"
                :showLrc="false"
                :listMaxHeight="'1'"/>
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
      shown() {
        return (this.$store.state.currentPlaylist &&
          this.$store.state.currentPlaylist.tracks &&
          this.$store.state.currentPlaylist.tracks.length > 0);
      },
      currentTrack() {
        if (this.currentTracks.length > 0) {
          return this.currentTracks[0];
        }
        return null;
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
    width: 90%;
    height: 10vh;
    bottom: 0;
    left: 0;
  }
</style>
