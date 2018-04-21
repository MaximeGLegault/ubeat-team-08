<template>
  <div id="userOverview">
    <avatar username="f c"></avatar>
    <h1>{{this.$store.state.userName}} </h1>
    <h1>{{this.$store.state.email}} </h1>
    <h1>{{this.$store.state.userPlaylists}}</h1>
     <a class="waves-effect waves-light btn">Follow</a>


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
  import Cookies from 'js-cookie';
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
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    }
};
</script>

<style>

</style>
