<template>
  <div>
    <h1>{{this.$store.state.userName}} </h1>
    <h1>{{this.$store.state.user_email}} </h1>
    <h1>{{this.$store.state.userPlaylists}} </h1>

  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  export default {
    data: () => ({
    }),
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    }
  };
</script>

<style>
</style>
