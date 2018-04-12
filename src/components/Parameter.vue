<template>

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

<style scoped>

</style>
