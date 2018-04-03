<template>
  <div id = "contentSignUp">
    <h1>Sign Up</h1>
    <div id="inputDiv">
      <div class="input-field col s6">
        <input id="userName" type="text" v-model="user_name">
        <label for="userName">Name</label>
      </div>
      <div class="input-field col s6">
        <input id="userEmail" type="text" v-model="user_email">
        <label for="userEmail">Email</label>
      </div>
      <div class="input-field col s6">
        <input id="userPass" type="password" v-model="user_password">
        <label for="userPass">Password</label>
      </div>
      <button id="btnLogin" v-on:click="signup" class="deep-purple accent-3 waves-effect waves-light btn">Sign Up</button>
      <p class="errorMessage">{{messageErr}}</p>
      <p class="loginMessage">{{messageLog}}</p>
    </div>
  </div>
</template>

<script>
  // import util from '@/lib/util';
  import { mapActions } from 'vuex';
  import api from '@/lib/api';

  export default {
    data: () => ({
      user_name: '',
      user_email: '',
      user_password: '',
      messageErr: '',
      messageLog: ''
    }),
    methods: {
      ...mapActions([

      ]),
      async signup() {
        await api.signUp(this.user_name, this.user_email, this.user_password)
          .then(() => {
            this.messageErr = '';
            this.messageLog = 'You\'re now registered';
            window.location = '#/login';
          }).catch((error) => {
            if (error.response.status === 400) {
              this.messageErr = 'Fill all the line';
            } else {
              this.messageErr = 'This user already exists';
            }
            this.messageLog = '';
          });
      }
    }
  };
</script>

<style scoped>
  #contentSignUp{
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
