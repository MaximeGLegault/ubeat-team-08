<template>
  <div style="display: flex; flex-flow: row nowrap">
    <div style="flex: 1"></div>
    <vue-slider style="flex: 2"
                ref="slider"
                v-model="value"
                v-bind="options" />
    <!--<input  id="range"-->
            <!--class="browser-default"-->
            <!--ref="range"-->
            <!--type="range"-->
            <!--:value="currentValue"-->
            <!--@mousedown=""-->
            <!--@touchstart=""/>-->
    <div style="flex: 1"></div>
  </div>
</template>

<script>
  import vueSlider from 'vue-slider-component';

  export default {
    name: 'Player-Controller',
    components: {
      'vue-slider': vueSlider
    },
    props: ['audioCurrentTime', 'audioDuration'],
    data() {
      return {
        value: 0,
        options: {
          dotSize: 18,
          speed: 0,
          tooltip: false,
          bgStyle: {
            backgroundColor: '#999999',
          },
          processStyle: {
            backgroundColor: '#651fff'
          },
          sliderStyle: {
            backgroundColor: '#651fff'
          },
        }
      };
    },
    methods: {
    },
    computed: {
      currentValue() {
        if (this.audioCurrentTime && this.audioDuration &&
          !Number.isNaN(this.audioCurrentTime) && !Number.isNaN(this.audioDuration)) {
          this.value = ((this.audioCurrentTime / this.audioDuration) * 100);
        }
        this.value = 0;
      }
    },
  };
</script>

<style scoped>
  #range {
    flex: 2;
  }

  input[type=range] {
    margin: -10px 0 0;
    background-color: transparent;
    outline: none;
    border-width: 0;
    padding: 15px;

  }

  input[type=range]::-webkit-slider-runnable-track {
    background: #999999;
    height: 7px;
  }

  input[type=range]::-webkit-slider-thumb {
    background-color: #651fff ;
    height: 18px;
    width: 18px;
  }

  input[type=range] + .thumb {
    background-color: #dedede;
  }

  input[type=range] + .thumb.active .value {
    color: red;
  }
</style>
