<template>
  <div class="artist">
    <img src="../../assets/empty-user-photo.png"/>
    <h1>{{this.name}}</h1>
    <p>EMail : {{email}}</p>
    <div v-if="this.playlist">
      <router-link :to="{ name : 'Playlist', params: { userId: this.id }}">
        <a></a>
      </router-link>
    </div>
    <div v-if="this.connectedUser===false">
      <a @click="follow" id="followBtn"
         class="waves-effect waves-light btn"
         v-if="this.$route.params.userId">Follow</a>
    </div>
  </div>
</template>

<script>
  import api from '@/lib/api';

  export default {
    name: 'UserDescription',
    props: {
      connectedUser: false,
      id: '',
      name: '',
      email: ''
    },
    methods: {
      follow() {
        api.postFollow(this.id);
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
