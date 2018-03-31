<template>
    <div id = "contentLogin">
      <h1>Login</h1>
      <div id="inputDiv">
        <div class="input-field col s6">
          <input id="userEmail" type="text" v-model="email">
          <label for="userEmail">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="userPass" type="password" v-model="password">
          <label for="userPass">Password</label>
        </div>
        <button id="btnLogin" v-on:click="login" class="deep-purple accent-3 waves-effect waves-light btn">Login</button>
      </div>
    </div>
</template>

<script>
  // import util from '@/lib/util';
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      ...mapActions([

      ]),
      login() {
        console.log('login');
        console.log(this.email);
        console.log(this.password);
        window.location = '/';
      }
      // toggleEdit() {
      //   this.showSectionEdit = !this.showSectionEdit;
      // },
      // async addPlaylist() {
      //   this.createNewPlaylist('New Playlist');
      // }
    }
  };
</script>

<style scoped>
  #contentLogin{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1{
    align-self: center;
  }
  #inputDiv{
    width: 40%;
    align-self: center;
  }
  .btn:focus, .btn:hover{
    color: white;
  }
</style>
