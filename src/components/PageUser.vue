<template>
  <div id="userOverview">
    <avatar id="gravatar" username="Random" src="http://i0.wp.com/www.spidermancrawlspace.com/wp-content/uploads/2016/05/cropped-5a1bccb02a1b404f215945f82fa73378.jpg"></avatar>

    <!--username utilise les initials du nom pour les afficher. j'essaye de lui passer
     {{this.$store.state.userName}}, mais ne marche pas...-->
    <avatar username="Ta chanka"></avatar>
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


    <!--List of friends -->
    <ul id="friends"
        v-for="PageUserFriends in this.$store.state.PageUserFriends">
      <li>
        <a class="listFriends"
           v-bind:id="PageUserFriends.id"
           v-on:click="$emit('changePlaylist', PageUserFriends.id)">
          {{PageUserFriends.name}}
        </a>
      </li>
    </ul>
  </div>
    <!--end of friends-->

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

  #userOverview
  {
    text-align: center;
  }
</style>
