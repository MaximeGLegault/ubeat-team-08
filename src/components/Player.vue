<template>
    <div id="player">
      <div id="album_cover" v-if="current_track">
        <img :src="current_track.artworkUrl100"/>
      </div>
      <div id="buttons">
        <div id="slidecontainer">
          <input type="range" min="0" max="10"/>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'player',
      props: ['tracks'],
      data() {
        return {
        };
      },
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
    height: 100px;
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
