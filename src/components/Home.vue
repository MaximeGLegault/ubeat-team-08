<template>
  <div>
    <div class="container">
      <h3>Welcome</h3>
      <p>With UBeat you can listen to your favorite tracks.Create playlist and share it with your friends  </p>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
          <div class="item active">
            <a class=" btn accent-3 bouton">Rap<i class="material-icons">play_arrows</i></a>
            <img src="http://dailychiefers.com/wp-content/media/2015/07/drake-to-the-stage-HD-Wallpaper.jpg" alt="Rap" style="width:100%;">

          </div>

          <div class="item">
            <a class=" btn  accent-3 bouton">Rock<i class="material-icons">play_arrows</i></a>
            <img src="http://www.musiclipse.com/wp-content/uploads/2014/06/amazing_ac_dc_brian_johnson_and_angus_young_wallpaper.jpg" alt="Rock" style="width:100%;">
          </div>

          <div class="item">
            <a class=" btn  accent-3 bouton">Classical<i class="material-icons">play_arrows</i></a>
            <img src="https://wwwcmuseorg-lvzm5mr0z.stackpathdns.com/wp-content/uploads/2017/04/introduce-classical-music-to-children.jpg" alt="Classical" style="width:100%;">
          </div>

          <div class="item">
            <a class=" btn accent-3 bouton">Pop<i class="material-icons">play_arrows</i></a>
            <img src="https://i.ytimg.com/vi/DsNK8iKEh00/maxresdefault.jpg" alt="Pop" style="width:100%;">
          </div>
          <div class="item">
            <a class=" btn accent-3 bouton">Electro<i class="material-icons">play_arrows</i></a>
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
  *
  {
    box-sizing: border-box;
  }
  /***/
  /*{*/
  /*box-sizing: border-box;*/
  /*}*/
  .container
  {
    position: relative;
    z-index: 0;
  }
 .bouton
  {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: grey;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 100px;
    text-align: center;
  }
 .bouton:hover{
   background-color:#651fff  ;
 }

  h3, p{
    text-align: center;
  }
  #link{
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
  }
  #link a{
    width: 150px;
    display: flex;
    justify-content:center;
    padding: 0 5px;
    align-items: center;
    color: white;
    font-size: 20px;
  }
  #link li{
    padding-top: 10px;
  }
  #link li:hover a{
    color: #651fff;
  }
  #link li:hover i{
    color: #651fff;
  }
  #link i{
    padding-left: 5px;
  }
  @media only screen and (max-width: 1100px)
  {
    .container
    {

    }
  }
  @media only screen and (max-width: 798px)
  {
    .container
    {

    }
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  {
    .container
    {
      margin: 400px 100px;
    }

  }
</style>
