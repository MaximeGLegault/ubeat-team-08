<template>

    <nav >

        <div id="menu">
          <img id="logo" src="static/images/logo_Ubeat4.png" alt="Ubeat">

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
              <h7 id="userName">user_name</h7>
            </div>
            <div id="menuSearch">
              <label id="searchIcon" class="label-icon" for="search"><i class="material-icons iconSearch">search</i></label>
              <input id="search" class="inputSearch"  type="search" >
              <i class="material-icons">close</i>
              <div class="indicator indigo darken-4" style="z-index:1"></div>
            </div>
          </div>



        </div>



      <div id="menuSm"><a class="btn btn-floating btn-large pulse deep-purple accent-3"><i class="material-icons">fingerprint</i></a></div>




    </nav>
</template>

<style>
  body{
    background-color: black;
    color: #fff;
  }
  nav{
    background-color: black;
  }
  #menu{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #1e1e1e;
    border-bottom: solid 7px #111;
    height: 60px;

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
    font-size: 1.3em;
    font-weight: bold;
  }
  #menuNavLg li:hover i{
    color: #651fff;
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

  #title{
    color: #651fff;
    font-size: 3em;
    margin-left: 20px;
    font-family: 'Bungee Inline', cursive;
    letter-spacing: 0px;
  }
  #title:hover{
    font-size: 3.2em;
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
  #menuRight{
    display: flex;
    flex-direction: row;
  }
  #menuSearch{
    display: flex;
    align-items: baseline;
    width: 250px;
    border: solid 2px;
    border-radius: 10px;
    height: 50px;
    padding: 0 10px;
    margin-top: 8px;
    margin-right: 20px;
  }
  #menuSearch:hover{
    border-color: #651fff;
  }
  #menu #dropdown1{
    background-color: #1e1e1e;
  }
  #menu #dropdown1 a{
    color: #fff;
  }
  #menuUser{
    margin: 0 10px;
  }
  #menuUser i{

    line-height: unset;
  }

  #userName{
    padding-right: 10px;
  }

  #logo{
    max-height: 50px;
    padding-left: 30px;
  }
  #menuSm{
    display: none;

    justify-content: center;

    background-color: #1e1e1e;
    border-bottom: solid 7px #111;
    height: 25px;
    width: 100%;

  }
  #menuSm i{
    font-size: 3em;
  }
  #menuSm a:hover {
  }


  /*  MEDIA  */
  @media screen and (max-width: 1100px){

    #menuNavLg{
      display: none;
    }
    #menuNavMd{
      display: flex;

    }

  }
  @media screen and (max-width: 730px){
    #menuSm{
      display: flex;
    }
    #menu{
      display: none;
    }


  }
</style>
