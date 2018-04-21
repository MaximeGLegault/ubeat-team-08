<template>
  <div id="userOverview">
    <avatar id="gravatar" username="Random" src="http://i0.wp.com/www.spidermancrawlspace.com/wp-content/uploads/2016/05/cropped-5a1bccb02a1b404f215945f82fa73378.jpg"></avatar>
    <h1>Username: {{this.$store.state.userName}} </h1>
    <h1>Email: {{this.$store.state.email}} </h1>

    <!--show playlist-->
    <h1>Public playlists</h1>
    <ul id="ulOfPlaylist"
        v-for="playlist in this.$store.state.userPlaylists">
      <li>
        <a class="listPlName"
           v-bind:id="playlist.id"
           v-on:click="$emit('changePlaylist', playlist.id)">
          {{playlist.name}}
        </a>
      </li>
    </ul>

    <!--follow btn-->
     <a id="followBtn" class="waves-effect waves-light btn">Follow</a>



    <!--friends-->
    <div class="result" v-for="result of results" :key="result.index">
      <div class="resultType">
        <div class="resultJacket">
          <!--<router-link :to="{ name : 'Artist', params: { artistId: result.artistId }}">-->
          <img src="../assets/empty-user-photo.png"/>
          <!--</router-link>-->
        </div>
        <div class="resultName">
          <div class="resultTitle">{{result.name}}</div>
          <div class="resultInfo">Users</div>
        </div>
      </div>
    </div>
    <!--end of friends-->
  </div>

</template>

<script>
import Avatar from 'vue-avatar';
import util from '@/lib/util';

export default {
  name: 'ResultByGlobal',
  props: {
    results: {
      type: Array,
      required: false
    },
  },
  methods: {
    artwork(artworkUrl, dimension) {
      return util.getUrlOfBiggerAlbumArtwork(artworkUrl, dimension);
    },
  },
  components: {
    Avatar
  },
};
</script>

<style>

  #userOverview
  {
    text-align: center;
  }
</style>
