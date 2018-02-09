<template>
    <nav >
        <div id="menu">
          <div class="title">
            <p>U<span class="titlecolor">Beat</span></p>
          </div>
          <div id="menuNavLg">
            <ul>
              <li>
                <router-link to="/">Home <i class="material-icons iconSearch">home</i></router-link>
              </li>
              <li>
                <router-link to="/album">Album <i class="material-icons iconSearch">album</i></router-link>
              </li>
              <li>
                <router-link to="/artist">Artist <i class="material-icons iconSearch">group</i></router-link>
              </li>
            </ul>
          </div>
          <div id="menuNavMd">
            <ul>
              <li>
                <router-link to="/"><i class="material-icons iconSearch">home</i></router-link>
              </li>
              <li>
                <router-link to="/album"><i class="material-icons iconSearch">album</i></router-link>
              </li>
              <li>
                <router-link to="/artist"> <i class="material-icons iconSearch">group</i></router-link>
              </li>
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
              <h6 id="userName">user_name</h6>
            </div>
            <div id="menuSearch">
              <label id="searchIcon" class="label-icon" for="search"><i class="material-icons iconSearch">search</i></label>
              <input id="search" class="inputSearch"  type="search" >
              <i class="material-icons">close</i>
              <div class="indicator indigo darken-4" style="z-index:1"></div>
            </div>
          </div>
        </div>
      <div id="menuSm">
        <div id="menuSmDropDown">
          <div class="title">
            <p>U<span class="titlecolor">Beat</span></p>
          </div>
          <div id="ulSmList">
            <ul>
              <li>
                <router-link to="/"><i class="material-icons iconSearch">home</i></router-link>
              </li>
              <li>
                <router-link to="/album"><i class="material-icons iconSearch">album</i></router-link>
              </li>
              <li>
                <router-link to="/artist"><i class="material-icons iconSearch">group</i></router-link>
              </li>
            </ul>
          </div>
          <div id="menuSmUserSearch">
            <div id="menuSmSearch">
              <form>
                <input type="text" placeholder="Search...">
                <a><i class="material-icons">search</i></a>
              </form>
            </div>
          </div>
            <div id="menuSmUser" class="fixed-action-btn horizontal click-to-toggle">
              <a class="btn-floating btn-large deep-purple accent-3">
                <i class="material-icons ">person</i>
              </a>
              <ul>
                <li><a class="btn-floating btn white"><i class="material-icons iconPurple fa fa-sign-out"></i></a></li>
                <li><a class="btn-floating btn deep-purple accent-3"><i class="material-icons">settings_applications</i></a></li>
                <li><a class="btn-floating btn white"><i class="material-icons iconPurple">assignment_ind</i></a></li>
              </ul>
            </div>
        </div>
        <div id="menuSmBtn"><a id="btnDropdown" class="btn btn-floating btn-large pulse deep-purple accent-3 "><i class="material-icons">fingerprint</i></a></div>
      </div>
    </nav>
</template>
<style>
  /* GENERAL */
  body{
    background-color: black;
    color: #fff;
    padding: 0;
    margin: 0;
  }
  nav{
    background-color: black;
  }
  /* MENU */
  #menu{
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #1e1e1e;
    border-bottom: solid 7px #111;
    height: 60px;
    width: 100%;
  }
  .titlecolor{
    font-family: 'Black Ops One', cursive;
    color: #fff;
    margin-left: 2px;
    font-size: 44px;
    font-weight: normal;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: baseline;
    text-transform: none;
    font-family: 'Black Ops One', cursive;
    margin-left: 20px;
    color: #651fff;
  }
  .title p{
    font-size: 45px;
    padding-left: 5px;
    font-weight: bold;
  }
  #dropdown1 li:hover{
    background-color: #651fff;
  }
  #menuNavLg a{
    width: 150px;
    display: flex;
    justify-content:center;
    padding: 0 5px;
    align-items: center;
  }
  #menuNavLg li:hover a{
    color: #651fff;
  }
  #menuNavLg li:hover i{
    color: #651fff;
  }
  #menuRight{
    display: flex;
    flex-direction: row;
  }
  #menuSearch{
    display: flex;
    align-items: center;
    width: 250px;
    border: solid 1px;
    border-radius: 10px;
    height: 40px;
    padding: 0 10px;
    margin-top: 8px;
    margin-right: 20px;
  }
  #menuSearch:hover{
    border-color: #651fff;
  }
  #search{
    height: 30px;
    align-self: center;
    margin-top: 15px;
  }
  #search:focus{
    border-bottom: 1px solid #fff;
    -webkit-box-shadow: 0 1px 0 0 #fff;
    -moz-box-shadow: 0 1px 0 0 #fff;
    box-shadow: 0 1px 0 0 #fff;
  }
  .iconSearch{
    align-self: center;
    color: #fff;
  }
  #menu #dropdown1{
    background-color: #1e1e1e;
  }
  #menu #dropdown1 a{
    color: #fff;
  }
  #menuUser{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 10px;
  }
  #userName{
    padding-right: 10px;
    padding-left: 8px;
  }
  #menuUser i{
    line-height: unset;
  }
  /* MEDIUM MENU */
  #menuNavMd ul{
    display: flex;
  }
  #menuNavMd i{
    display: flex;
    width: 40px;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    height: 60px;
  }
  #menuNavMd li:hover i{
    color: #651fff;
  }
  #menuNavMd{
    display: none;
  }
  /* SMALL MENU */
  #menuSmBtn{
    display: none;
    justify-content: center;
    background-color: #1e1e1e;
    border-bottom: solid 7px #111;
    height: 25px;
    width: 100%;
  }
  #menuSmBtn i{
    font-size: 3em;
  }
  #menuSm{
    position: fixed;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #1e1e1e;
    align-items: center;
  }
  #ulSmList{
    display: flex;
    justify-content: center;
  }
  #ulSmList li{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #menuSm li{
    width: 80px;
  }
  #menuSm .title{
    margin: 0;
  }
  #menuSm .title p{
    padding: 0;
    margin: 5px;
  }
  #menuSmUserSearch{
  display: flex;
  justify-content: center;
  flex-direction: column;
  }
  #menuSmUser{
    display: flex;
    align-items: right;
    justify-content: flex-end;
    position: absolute;
    padding: 20px 20px 20px 0;
  }
  #menuSmUser ul{
    width: 250px;
  }
  #menuSmUser li{
   width: 60px;
  }
  .fixed-action-btn{
    right: 0;
    bottom: 0;
  }
  #menuSmSearch{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 0 55px 15px;
  }
  #menuSmSearch form{
    display: flex;
  }
  #menuSmSearch form input{
    width: 270px;
  }
  #menuSmSearch form input:focus{
    border-bottom: 1px solid #fff;
    -webkit-box-shadow: 0 1px 0 0 #fff;
    -moz-box-shadow: 0 1px 0 0 #fff;
    box-shadow: 0 1px 0 0 #fff;
  }
  i.iconPurple{
    color: #651fff;
  }
  #menuSmDropDown {
    display: none;
  }

  /* MEDIA SCREEN */
  @media screen and (max-width: 1100px){
    #menuNavLg{
      display: none;
    }
    #menuNavMd{
      display: flex;
    }
  }
  @media screen and (max-width: 798px){
    #menuSmBtn{
      display: flex;
    }
    #menu{
      display: none;
    }
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px)
  and (orientation: portrait){
    #menuSmBtn{
      display: flex;
    }
    #menu{
      display: none;
    }
    #menuSmBtn a{
      height: 80px;
      width: 80px;
    }
    #menuSmBtn i{
      font-size: 5em;
      line-height: 80px;
    }
    .title{
      margin: 10px 0;
    }
    .title p{
      font-size: 65px;
    }
    .titlecolor{
      font-size: 64px;
    }
    #ulSmList i.material-icons{
      font-size: 60px;
    }
    #ulSmList{
      margin: 20px 0;
    }
    #menuSmSearch{
      margin: 30px 0;
    }
    #menuSmSearch form input{
      font-size: 30px;
    }
    #ulSmList li{
      width: 200px;
    }
    #menuSmUser a{
      width: 50px;
      height: 50px;
    }
    #menuSmUser i.material-icons{
      font-size: 40px;
      line-height: 50px;
    }
  }
</style>

