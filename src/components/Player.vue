<template>
    <div id="player">

      <!--
       <div id="album_cover" v-if="current_track">
        <img :src="current_track.artworkUrl100"/>
      </div>-->

      <div id="buttons">
      </div>
      <div id="audioPlayer">
        <vue-audio :file="currentTrack" />
      </div>
    </div>
</template>

<script>
  import VueAudio from 'vue-audio';

  export default {
    data() {
      return {
        file1: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview20/v4/45/9e/56/459e5630-66c6-da49-3f46-e36ff39d5044/mzaf_7576060663190289522.plus.aac.p.m4a',
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
      currentTrack() {
        return this.$store.state.currentPlaylist.tracks[0].previewUrl;
      },
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
