<template>
    <div id="player">
       <player :file="currentTrack" />
      </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        file1: 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview20/v4/45/9e/56/459e5630-66c6-da49-3f46-e36ff39d5044/mzaf_7576060663190289522.plus.aac.p.m4a',
      };
    },
    components: ['Aplayer'],
    events: {
      playRequest(playRequest) {
        console.log(playRequest);
      }
    },
    methods: {
      ...mapActions([
      ]),
    },
    name: 'player',
    props: ['tracks'],
    computed: {
      currentTrack() {
        if (this.$store.state.currentPlaylist) {
          if (this.$store.state.currentPlaylist &&
            this.$store.state.currentPlaylist.tracks &&
            this.$store.state.currentPlaylist.tracks.length > 0) {
            const trackIndex = this.$store.state.currentPlaylist.selectedTrack || 0;
            return this.$store.state.currentPlaylist.tracks[trackIndex].previewUrl;
          }
        }
        return '';
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
