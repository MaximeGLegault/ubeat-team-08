<template>
    <div id = "contentLogin">
      <h1>Login</h1>
      <div id="inputDiv">
        <div class="input-field col s6">
          <input id="userEmail" type="text" v-model="user_email">
          <label for="userEmail">Email</label>
        </div>
        <div class="input-field col s6">
          <input id="userPass" type="password" v-model="user_password">
          <label for="userPass">Password</label>
        </div>
        <button id="btnLogin" v-on:click="login" class="deep-purple accent-3 waves-effect waves-light btn">Login</button>
        <p class="errorMessage">{{messageErr}}</p>
        <p class="loginMessage">{{messageLog}}</p>
      </div>
    </div>
</template>

<script>
  // import util from '@/lib/util';
  import { mapActions } from 'vuex';
  import api from '@/lib/api';
  import Cookies from 'js-cookie';

  export default {
    data: () => ({
      user_email: '',
      user_password: '',
      messageErr: '',
      messageLog: ''
    }),
    methods: {
      ...mapActions([

      ]),
      async login() {
        await api.loginUser(this.user_email, this.user_password)
          .then((value) => {
            this.$store.state.userName = value.data.name;
            this.messageErr = '';
            this.messageLog = 'You\'re now log in';
            Cookies.set('token', value.data.token);
            console.log(Cookies.get('token'));
            window.location = '#/';
          }).catch(() => {
            this.messageErr = 'User not found, check your username and password';
            this.messageLog = '';
            this.$store.state.userName = '';
          });
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
  .errorMessage{
    margin-top: 25px;
    color: red;
    font-size: 1em;
  }
  .loginMessage{
    margin-top: 25px;
    color: greenyellow;
    font-size: 1em;
  }
</style>
