<template>
<div class="main">
  <user-description v-if="this.id"
          :key="this.id"
          :name="this.name"
                    :email="this.email"
                    :connectedUser="this.connectedUser"
  />
  <user-follower v-if="this.following"
              :key="this.id"
              :following="this.following"
  />
</div>
</template>

<script>
  import Cookies from 'js-cookie';
  import api from '@/lib/api';
  import UserFollower from './UserFollower';
  import UserDescription from './UserDescription';

  export default {
    name: 'User',
    components: {
      UserFollower,
      UserDescription
    },
    data() {
      return {
        connectedUser: false,
        id: '',
        name: '',
        email: '',
        following: []
      };
    },
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    },
    async created() {
      if (this.$route.params.userId === this.$store.state.connectedUser) {
        this.connectedUser = true;
      } else {
        this.connectedUser = false;
      }
      await api.getUser(this.$route.params.userId)
        .then((value) => {
          this.id = value.id;
          this.email = value.email;
          this.following = value.following;
        }).catch((error) => {
          if (error.response.status === 401) {
            this.$router.push('/login');
          }
        });
    }
  };
</script>

<style scoped>

</style>
