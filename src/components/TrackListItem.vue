<template>
  <tr>
    <td class="play_btn_column">
      <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
    </td>
    <td>{{track.trackNumber}}</td>
    <td class="song_name_column">{{track.trackName}}</td>
    <td>{{duration}}</td>
  </tr>
</template>

<script>
  import util from '@/lib/util';

  export default {
    name: 'trackListItem',
    props: {
      track: {
        required: true,
        type: Object,
      }
    },
    computed: {
      duration() {
        return util.getLengthFromMilliseconds(this.track.trackTimeMillis);
      }
    },
  };
</script>

<style scoped>
  .play_btn_column {
    width: 80px;
  }
  .song_name_column {
    text-align: left;
  }
</style>
