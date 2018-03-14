<template>
  <tr>
    <td class="play_btn_column">
      <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
    </td>
    <td>{{tracknumber}}</td>
    <td class="song_name_column">{{name}}</td>
    <td>{{duration}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'trackListItem',
    data() {
      return {
        id: 0,
        name: '',
        duration: 0,
        tracknumber: 0,
      };
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
