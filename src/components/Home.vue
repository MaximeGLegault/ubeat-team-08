<template>
  <div>
    <div class="container">
      <h2>Welcome</h2>
      <p>ubest is an music library created by students of GLO_3102 Ulavall</p>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>

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


        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  h2, p{
    text-align: center;
  }
  /*  MEDIA  */
  @media screen and (max-width: 1100px)and (orientation: landscape){
    .item {height: 100%;}
  }
  @media screen and (max-width: 730px) and (orientation: landscape){
    .item {height: 100%;}
  }
  /* MOBILE  */
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: landscape){
    .item {height: 100%;}
  }
</style>
