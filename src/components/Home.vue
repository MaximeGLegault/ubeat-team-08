<template>
  <div>
    <div class="container homeContainer">
      <h3 class="titleHeader">Discover</h3>
      <div class="playlistChoice">
        <a class="play_circle_outline deep-purple  btn playlistBtn" data-target="#myCarousel" data-slide-to="0" ><i class="material-icons left">play_circle_outline</i>Rap</a>
        <a class="play_circle_outline deep-purple btn playlistBtn" data-target="#myCarousel" data-slide-to="1"><i class="material-icons left">play_circle_outline</i>Rock</a>
        <a class="play_circle_outline deep-purple btn playlistBtn" data-target="#myCarousel" data-slide-to="2"><i class="material-icons left">play_circle_outline</i>Classical</a>
        <a class="play_circle_outline deep-purple btn playlistBtn" data-target="#myCarousel" data-slide-to="3"><i class="material-icons left">play_circle_outline</i>Pop</a>
        <a class="play_circle_outline deep-purple btn playlistBtn" data-target="#myCarousel" data-slide-to="4"><i class="material-icons left">play_circle_outline</i>Electro</a>
      </div>

     <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
       <!-- <ol class="carousel-indicators">
          <li ></li>
          <li ></li>
          <li ></li>
          <li ></li>
          <li ></li>
        </ol>
        -->

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
  /*{*/
  /*box-sizing: border-box;*/
  /*}*/
  .homeContainer
  {
    position: relative;
    z-index: 0;
  }
 .boutonCarousel
  {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: grey;
    border: none;
    cursor: pointer;
    border-radius: 100px;
    text-align: center;
  }
 .boutonCarousel:hover{
   background-color:#651fff  ;
 }
  .titleText
  {
    font-size: 20px;
  }
  .titleHeader, .titleText{
    text-align: center;
  }
  .playlistChoice
  {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 5px;
    width: 100%;
    justify-content: space-between;
  }
  .playlistBtn
  {

  }

  @media only screen and (max-width: 1100px)
  {
 
  }
  @media only screen and (max-width: 798px)
  {

  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  {
    .titleText
    {
      font-size: 24px;
    }

  }
</style>
