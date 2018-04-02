<template>
  <div style="display: flex; flex-flow: row nowrap">
    <div style="flex: 1"></div>
    <input  id="range"
            class="browser-default"
            ref="range"
            type="range"
            :value="currentValue"
            @mousedown=""
            @touchstart=""/>
    <div style="flex: 1"></div>
  </div>
</template>

<script>
    export default {
      name: 'Player-Controller',
      props: ['timeStats'],
      methods: {
        onMouseDown() {
        },
        onTouchStart() {
        },
      },
      mounted() {
        this.$refs.range.value = 0;
      },
      computed: {
        currentValue() {
          if (this.timeStats) {
            return ((this.timeStats.currentTime / this.timeStats.duration) * 100);
          }
          return 0;
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

  input[type=range]+.thumb.active {
    visibility: hidden!important;
  }



</style>
