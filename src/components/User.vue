<template>
  <div id="userOverview">
    <avatar :username="this.$store.state.connectedUser.name"></avatar>
    <h1>Username: {{this.$store.state.connectedUser.name}} </h1>
    <h1>Email: {{this.$store.state.connectedUser.email}} </h1>

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
     <a id="followBtn"
        class="waves-effect waves-light btn"
        v-if="this.$route.params.userId">Follow</a>


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
  import api from '@/lib/api';
  import util from '@/lib/util';

  export default {
    name: 'User',

    components: {
      Avatar
    },

    data: () => ({
      playlists: ''
    }),

    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    },

    async mounted() {
      if (this.$route.params.userId !== 0 ||
        this.$route.params.userId !== this.$store.state.connectedUser) {
        await api.getAllPlaylists()
          .then((value) => {
            this.playlists = util.getPlaylistsOfUser(value, this.$route.params.userId);
          });
      } else {
        this.playlists = this.$store.state.userPlaylists;
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
