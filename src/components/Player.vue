<template>
    <div id="player">
      <div id="thumbnail">
        <img src="http://is3.mzstatic.com/image/thumb/Music20/v4/33/47/ea/3347ea2b-5628-9283-da07-bcfb58e597d0/source/100x100bb.jpg"
             :click="$emit('jhg')"/>
      </div>
      <div id="buttons">
        <div id="left_buttons">
          <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_previous</i></a>
        </div>
        <div id="middle_button">
          <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">play_arrow</i></a>
        </div>
        <div id="right_buttons">
          <a class=" btn deep-purple accent-3 btn-floating"><i class="material-icons md-48">skip_next</i></a>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    components: {
    },
    computed: {
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
    display: inline-flex;
  }

  #thumbnail {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100px;
  }

  #buttons {
    display: inline-flex;
    position: relative;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #left_buttons {

  }

  #middle_button {

  }

  right_buttons {

  }
</style>
