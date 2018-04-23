<template>
<div class="main">
  <user-description v-if="this.user"
                    :user="this.user"
  />
  <user-follower v-if="this.user"
                 :user="this.user"
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
        user: undefined,
      };
    },
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    },
    async created() {
      if (this.$route.params.userId === this.$store.state.user) {
        this.user = this.$store.state.user;
      } else {
        await api.getUser(this.$route.params.userId)
          .then((value) => {
            this.user = value;
          }).catch((error) => {
            if (error.response.status === 401) {
              this.$router.push('/login');
            }
          });
      }
    }
  };
</script>

<style scoped>

</style>
