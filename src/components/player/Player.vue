<template>
    <div id="player_section">

      <img id="thumbnail"
           src="http://is3.mzstatic.com/image/thumb/Music20/v4/33/47/ea/3347ea2b-5628-9283-da07-bcfb58e597d0/source/100x100bb.jpg"
           "/>

      <controller ref="progressController" :timeStats="playStats"/>


        <div id="controls">

          <div id="text_info">
            <a style="padding-left: 100px">Song Name</a>
            <a style="padding-left: 100px">Artist Name</a>
          </div>

          <div id="currentTimeLabel">
            {{ currentTime }}
          </div>

          <div id="buttons">
            <div id="left_buttons">
              <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_previous</i></a>
            </div>
            <div id="middle_button">
              <a class=" btn deep-purple accent-3 btn-floating" v-on:click="playPressed"><i style="font-size: 40px" class="material-icons md-48">play_arrow</i></a>
            </div>
            <div id="right_buttons">
              <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_next</i></a>
            </div>
          </div>

          <div id="totalTimeLabel">{{ duration }}</div>

          <div id="playlist_button"></div>

        </div>

        <audio ref="audio"></audio>

      </div>
</template>

<script>
  import util from '@/lib/util';
  import Controller from './Player-Controller';


  export default {
    components: {
      Controller
    },
    data() {
      return {
        playStats: {
          duration: 1,
          currentTime: 0,
        }
      };
    },
    computed: {
      audio() {
        return this.$refs.audio;
      },
      duration() {
        return util.getLength(this.playStats.duration, 'seconds');
      },
      currentTime() {
        return util.getLength(this.playStats.currentTime, 'seconds');
      }
    },
    methods: {
      playPressed() {
        this.audio.src = 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/ed/ed/dd/mzm.raqlwshv.aac.p.m4a';
        this.audio.play();
      },
      onDurationChange() {
        if (this.audio.duration !== 1) {
          this.playStats.duration = this.audio.duration;
        }
      },
      onTimeUpdate() {
        this.playStats.currentTime = this.audio.currentTime;
      },
      initAudio() {
        this.audio.addEventListener('durationchange', this.onDurationChange);
        this.audio.addEventListener('timeupdate', this.onTimeUpdate);
      }
    },
    mounted() {
      this.initAudio();
    }
  };
</script>

<style scoped>
  #player_section {
    background-color: #1e1e1e;
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
  }

  #thumbnail {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  #controls {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
  }

  #buttons {
    flex: 2;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  #currentTimeLabel {
    flex-basis: content;
  }

  #playlist_button {
    flex: 1;
  }

  #text_info {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
  }

  #buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #totalTimeLabel {
    flex-basis: content;
  }




</style>
