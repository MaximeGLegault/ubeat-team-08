<template>
  <div>
    <div class="container homeContainer">
      <h3 class="titleHeader">Welcome <span class="userName">{{userName}}</span></h3>
      <p class="titleText">With UBeat you can listen to your favorite tracks.Create playlist and share it with your friends  </p>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="http://dailychiefers.com/wp-content/media/2015/07/drake-to-the-stage-HD-Wallpaper.jpg" alt="Rap" style="width:100%;">
          </div>
          <div class="item">
            <img src="http://www.musiclipse.com/wp-content/uploads/2014/06/amazing_ac_dc_brian_johnson_and_angus_young_wallpaper.jpg" alt="Rock" style="width:100%;">
          </div>
          <div class="item">
            <img src="https://wwwcmuseorg-lvzm5mr0z.stackpathdns.com/wp-content/uploads/2017/04/introduce-classical-music-to-children.jpg" alt="Classical" style="width:100%;">
          </div>
          <div class="item">
            <img src="https://i.ytimg.com/vi/DsNK8iKEh00/maxresdefault.jpg" alt="Pop" style="width:100%;">
          </div>
          <div class="item">
            <img src="https://cdn01.masterstudies.com/element_db/52/5261_Electronics_Music_Production_pic_1.jpg" alt="electro" style="width:100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';

  export default {
    data: () => ({
      userName: 'test'
    }),
    beforeCreate() {
      if (Cookies.get('token') === '') {
        this.$router.push('/login');
      }
    },
    async created() {
      this.userName = this.$store.state.userName;
    }
  };
</script>

<style>
  .userName{
    color: #651fff;
  }
  .homeContainer
  {
    position: relative;
    z-index: -1;
  }
  .homeContainer{
    font-size: 1.3em;
  }
  .titleHeader, .titleText{
    text-align: center;
  }
  @media only screen and (max-width: 1100px)
  {
  }
  @media only screen and (max-width: 798px)
  {
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  {
    .homeContainer p{
      font-size: 2em;
    }
    .homeContainer{
      margin-top: 80px;
    }
  }
</style>
