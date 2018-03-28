<template>
    <div id="player_section">

      <img id="thumbnail"
           src="http://is3.mzstatic.com/image/thumb/Music20/v4/33/47/ea/3347ea2b-5628-9283-da07-bcfb58e597d0/source/100x100bb.jpg"
           :click="$emit('jhg')"/>

      <controller/>


        <div id="controls">

          <div id="text_info">
            <a style="padding-left: 100px">Song Name</a>
            <a style="padding-left: 100px">Artist Name</a>
          </div>

          <div id="buttons">
            <div id="left_buttons">
              <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_previous</i></a>
            </div>
            <div id="middle_button">
              <a class=" btn deep-purple accent-3 btn-floating"><i style="font-size: 40px" class="material-icons md-48">play_arrow</i></a>
            </div>
            <div id="right_buttons">
              <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_next</i></a>
            </div>
          </div>

          <div id="playlist_button"></div>

        </div>

        <audio ref="audio"/>

      </div>
</template>

<script>
  import Controller from './Player-Controller';

  export default {
    components: {
      Controller
    },
    computed: {
      audio() {
        return this.$ref.audio;
      }
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

  #asd {
    flex: 1;
  }



</style>
