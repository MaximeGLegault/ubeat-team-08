<template>
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Ubeat - Home</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
    <!--Materialize-->
    <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">
    <script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js">
    </script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--font Bungee-->
    <link href="https://fonts.googleapis.com/css?family=Bungee+Inline" rel="stylesheet">

  </head>
  <body>
  <header>
    <div id="menuSm"><a id="logoButton" class="waves-effect waves-light btn"><img id="logoSm" src="logo/logo_Ubeat4.png" alt="Ubeat"></a></div>
    <nav id="menu">
      <img id="logo" src="logo/logo_Ubeat4.png" alt="Ubeat">
      <div id="menuNavLg" class="nav-wrapper">
        <ul>
          <li> <a href="home.html">Home <i class="material-icons iconSearch">home</i></a></li>
          <li> <a href="playlist.html">Playlist <i class="material-icons iconSearch">queue_music</i></a></li>
          <li><a href="artist.html">Artist <i class="material-icons iconSearch">group</i></a></li>
          <li><a href="album.html">Album <i class="material-icons iconSearch">album</i></a></li>
        </ul>
      </div>
      <div id="menuNavMd">
        <ul>
          <li> <a href="home.html"><i class="material-icons iconSearch">home</i></a></li>
          <li> <a href="playlist.html"><i class="material-icons iconSearch">queue_music</i></a></li>
          <li><a href="artist.html"><i class="material-icons iconSearch">group</i></a></li>
          <li><a href="album.html"><i class="material-icons iconSearch">album</i></a></li>
        </ul>
      </div>
      <div id="menuRight">
        <div id="menuUser">
          <a class='dropdown-button btn-floating deep-purple accent-3' href='#' data-activates='dropdown1'><i class="material-icons">person</i></a>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#">profil</a></li>
            <li class="divider"></li>
            <li><a href="#">parameter</a></li>
            <li class="divider"></li>
            <li><a href="#">log out</a></li>
          </ul>
          <h7 id="userName">user_name</h7>
        </div>
        <div id="menuSearch">
          <label id="searchIcon" class="label-icon" for="search"><i class="material-icons iconSearch">search</i></label>
          <input id="search" class="inputSearch"  type="search" >
          <i class="material-icons">close</i>
          <div class="indicator indigo darken-4" style="z-index:1"></div>
        </div>
      </div>
    </nav>
  </header>
  <div id="artist">
    <h1>Metallica</h1>
    <p>Genre : Rock</p>
    <div id="itunes">
      <a href="https://itunes.apple.com/ca/artist/metallica/3996865?l=en">
        <img src="https://notyouraveragetype.files.wordpress.com/2015/07/itunes-logo-transparent-background-i81.png">
      </a>
    </div>
  </div>
  <div id="listAlbums">
    <!--Album 1-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/5a/8d/53/5a8d53b7-20b6-b64f-8428-64df65292b40/MET_HTSD_Album_20160816_4000px.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Hardwired...To Self-Destruct</div>
        <div class="year">2016</div>
      </div>
    </div>
    <!--Album 2-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music71/v4/5a/8d/53/5a8d53b7-20b6-b64f-8428-64df65292b40/MET_HTSD_Album_20160816_4000px.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Hardwired...To Self-Destruct (Deluxe)</div>
        <div class="year">2016</div>
      </div>
    </div>
    <!--Album 3-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/c4/3d/05/c43d05dc-b5a9-6686-7de1-05d61d789380/858978005639.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Spit Out the Bone (Radio Edit) - Single</div>
        <div class="year">2016</div>
      </div>
    </div>
    <!--Album 4-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/76/af/2e/76af2e5c-8573-d64f-e234-0caf0d27b4f4/Met_Lords-FINAL.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Lords of Summer (First Pass Version) - Single</div>
        <div class="year">2014</div>
      </div>
    </div>
    <!--Album 5-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music/v4/15/64/d4/1564d4b3-aaea-91a2-f167-79a68ecb47fc/Unknown.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">One (Awards Show Rehearsal Version) - Single</div>
        <div class="year">2014</div>
      </div>
    </div>
    <!--Album 6-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music6/v4/0e/f0/c5/0ef0c567-7802-d4d8-ebf0-9d35e88a77e0/Metallica_TTN_Soundtrack_RGB.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Metallica Through the Never (Music from the Motion Picture)</div>
        <div class="year">2013</div>
      </div>
    </div>
    <!--Album 7-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music/v4/87/2c/d9/872cd9f1-bfc5-e679-36c0-5b7e1b4bc519/0093624952336.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Beyond Magnetic - EP</div>
        <div class="year">2011</div>
      </div>
    </div>
    <!--Album 8-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music/0e/40/d2/mzi.bxkttsfl.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Lulu</div>
        <div class="year">2011</div>
      </div>
    </div>
    <!--Album 9-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music/v4/72/02/51/72025100-5709-fcda-099d-d558acc7fc3e/0093624981565.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Death Magnetic</div>
        <div class="year">2008</div>
      </div>
    </div>
    <!--Album 10-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music/v4/ae/e3/c2/aee3c2c1-27dd-4c7a-8dbf-d54e9c9071cd/cover.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">The Videos 1989-2004</div>
        <div class="year">2006</div>
      </div>
    </div>
    <!--Album 11-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music/v4/15/9e/5b/159e5b08-a880-a9e1-229a-1e1e5724721c/0093624986508.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Some Kind of Monster (Live)</div>
        <div class="year">2004</div>
      </div>
    </div>
    <!--Album 12-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music/v4/2f/79/91/2f79911f-02cf-79df-fee1-c501fd1f3ac3/0075596285360.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">St. Anger</div>
        <div class="year">2003</div>
      </div>
    </div>
    <!--Album 13-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Features/v4/ce/8a/cb/ce8acbea-bfdc-9a57-c9bb-de5f7b5bf676/dj.cmpxtbyk.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">I Disappear - Single</div>
        <div class="year">2000</div>
      </div>
    </div>
    <!--Album 14-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music/v4/91/2a/df/912adffa-7136-e15f-6bed-32d2c5936411/0075596246361.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">S&M (Live)</div>
        <div class="year">1999</div>
      </div>
    </div>
    <!--Album 15-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music/v4/8b/f0/b2/8bf0b220-fff0-4caf-4fad-2c40ec94830f/0075596229968.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Garage, Inc.</div>
        <div class="year">1998</div>
      </div>
    </div>
    <!--Album 16-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music/v4/24/59/da/2459da1e-b430-c3c6-6a02-d40fb4c26178/0093624986539.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Reload</div>
        <div class="year">1997</div>
      </div>
    </div>
    <!--Album 17-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music/v4/21/01/d9/2101d9a1-e7cf-54ad-7cef-80e1541bd5f7/0093624986546.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Load</div>
        <div class="year">1996</div>
      </div>
    </div>
    <!--Album 18-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/16/9a/c7/169ac749-5acd-5f9d-c70e-a397ee92411c/dj.jyktscwl.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Live Sh*t: Binge & Purge (Live In Mexico City)</div>
        <div class="year">1993</div>
      </div>
    </div>
    <!--Album 19-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Music/v4/9a/41/03/9a410309-7dbe-fce4-a6be-43101f0a1352/0093624986553.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Metallica</div>
        <div class="year">1991</div>
      </div>
    </div>
    <!--Album 20-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/3b/e2/5f/3be25fec-ba01-8c4c-d694-cf7725f5c0fd/dj.rarclwth.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">...And Justice for All</div>
        <div class="year">1988</div>
      </div>
    </div>
    <!--Album 21-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/73/73/f4/7373f4a6-eb42-4bca-773c-c0cb1f0126db/858978005738.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">The $5.98 EP - Garage Days Re-Revisited (Remastered)</div>
        <div class="year">1987</div>
      </div>
    </div>
    <!--Album 22-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4d/6d/bd/4d6dbd44-a71b-8f11-d5b8-e589a3777b69/858978005196.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Master of Puppets (Remastered Deluxe Box Set)</div>
        <div class="year">1986</div>
      </div>
    </div>
    <!--Album 23-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4d/6d/bd/4d6dbd44-a71b-8f11-d5b8-e589a3777b69/858978005196.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Master of Puppets (Remastered Expanded Edition)</div>
        <div class="year">1986</div>
      </div>
    </div>
    <!--Album 24-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4d/6d/bd/4d6dbd44-a71b-8f11-d5b8-e589a3777b69/858978005196.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Master of Puppets (Remastered)</div>
        <div class="year">1986</div>
      </div>
    </div>
    <!--Album 25-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/1d/7d/88/1d7d88ea-3bfd-9f20-2c86-630a32aac634/dj.mapicmzf.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Ride the Lightning (Deluxe Edition)</div>
        <div class="year">1984</div>
      </div>
    </div>
    <!--Album 26-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/1d/7d/88/1d7d88ea-3bfd-9f20-2c86-630a32aac634/dj.mapicmzf.png/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Ride the Lightning (Remastered)</div>
        <div class="year">1984</div>
      </div>
    </div>
    <!--Album 27-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/58/4c/66/584c6656-f2a1-b8cf-0ef3-8390e0e4f74b/Kill_Em_All_HI_RES.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Kill 'Em All (Deluxe Edition)</div>
        <div class="year">1983</div>
      </div>
    </div>
    <!--Album 28-->
    <div class="album">
      <div class="albumJacket">
        <img src="https://is2-ssl.mzstatic.com/image/thumb/Music49/v4/58/4c/66/584c6656-f2a1-b8cf-0ef3-8390e0e4f74b/Kill_Em_All_HI_RES.jpg/268x0w.jpg">
      </div>
      <div class="albumTitle">
        <div class="title">Kill 'Em All (Remastered)</div>
        <div class="year">1983</div>
      </div>
    </div>
  </div>
  </body>
  </html>

</template>

<style>
  html{
    font-size:  14px;
  }
  h1{
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
  }
  p{
    font-size: 1rem;
  }
  #artist{
    text-align: center;
  }
  #itunes{

  }
  #listAlbums{
    width: 90vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    align-content: flex-start;
  }
  .album{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
  }
  .albumJacket{

  }
  .albumTitle{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    align-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
  }
  .title{
    width: 100vw;
    font-size: 1rem;
    text-align: left;
  }
  .year{
    width: 100vw;
    color: whitesmoke;
    font-size: 0.8rem;
    text-align: left;
  }

</style>
