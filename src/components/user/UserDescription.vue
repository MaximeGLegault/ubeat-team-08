<template>
  <div class="artist">
    <img src="../../assets/empty-user-photo.png"/>
    <h1>{{user.name}}</h1>
    <p>EMail : <a :HREF="'mailto:{{user.email}}'">{{user.email}}</a></p>
    <div v-if="this.user.playlist">
      <router-link :to="{ name : 'Playlist', params: { userId: this.user.id }}">
        <a></a>
      </router-link>
    </div>
    <div v-if="this.user.id !== this.$store.state.connectedUser.id">
      <a @click="follow" id="followBtn"
         class="waves-effect waves-light btn">Follow</a>
      <router-link :to="{ name : 'Playlist', params: { userId: id }}">
        <a id="followBtn"
           class="waves-effect waves-light btn">Playlist</a>
      </router-link>
    </div>
  </div>
</template>

<script>
  import api from '@/lib/api';

  export default {
    name: 'UserDescription',
    props: {
      user: undefined,
    },
    methods: {
      follow() {
        api.postFollow(this.user.id);
      }
    }
  };
</script>

<style scoped>
  h1{
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
    margin: 20px 20px 0 20px;
  }
  p{
    font-size: 1rem;
    margin: 0 20px 10px 20px;
  }
  .artist{
    text-align: center;
    margin: 20px 20px 10px 20px;
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
</style>
