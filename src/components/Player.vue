<template>
    <div id="player">

      <!--
       <div id="album_cover" v-if="current_track">
        <img :src="current_track.artworkUrl100"/>
      </div>-->

      <div id="buttons">
      </div>
      <div id="audioPlayer">
        <vue-audio :file="file1" />
      </div>
    </div>
</template>

<script>
  import VueAudio from 'vue-audio';

  export default {
    data() {
      return {
        file1: 'dist/sample.mp3',
        file2: 'dist/1.mp3'
      };
    },
    components: {
      'vue-audio': VueAudio
    },
    events: {
      playRequest(playRequest) {
        console.log(playRequest);
      }
    },
    name: 'player',
    props: ['tracks'],
    computed: {
      current_track() {
        if (this.tracks.length) {
          return this.tracks[0];
        }
        return {};
      }
    }
  };
</script>

<style scoped>
  #player {
    background-color: #1e1e1e;
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: row;
  }

  #buttons {
    display: flex;
    flex-flow: column;
  }
</style>
