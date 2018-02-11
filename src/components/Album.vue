 <template>
    <div>
      <div id="album_card">
        <div id="album_cover">
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4d/6d/bd/4d6dbd44-a71b-8f11-d5b8-e589a3777b69/858978005196.png/268x0w.jpg">
        </div>
        <div id="album_info">
          <h1 id="title">Master of Puppets (Remastered)</h1>
          <p id="artist_name">Metallica</p>
          <p id="album_description">
            Master of Puppets is the third studio album by American heavy metal band Metallica. It was released on March 3, 1986 by Elektra Records. Recorded at the Sweet Silence Studios with producer Flemming Rasmussen, it was the first Metallica album released on a major record label. Master of Puppets was the band's last album to feature bassist Cliff Burton, who died in a bus accident in Sweden during the album's promotional tour. The album peaked at number 29 on the Billboard 200 and became the first thrash metal album to be certified platinum. It was certified 6× platinum by the Recording Industry Association of America in 2003 for shipping six million copies in the United States. The album was eventually certified 6× platinum by Music Canada and gold by the British Phonographic Industry.

            Master of Puppets was released to critical acclaim and has been included in several publications' best album lists. Its driving, virtuosic music, and angry political lyrics drew praise from critics outside the metal community. The album is considered the band's strongest effort of the period and is one of the most influential heavy metal albums.
          </p>
          <p>1986 • 8 songs • 54:44 • Rock</p>
          <a href="https://geo.itunes.apple.com/ca/album/master-of-puppets-remastered/1275600311?mt=1&app=music&itscg=30200&itsct=afftoolset_1" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>        </div>
      </div>
      <div id="song_list">
        <table id="song_list_table">
          <thead>
            <tr>
              <th class="play_btn_column"></th>
              <th>#</th>
              <th class="song_name_column">NAME</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>1</td>
              <td class="song_name_column">Battery (Remastered)</td>
              <td>5:12</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>2</td>
              <td class="song_name_column">Master of Puppets (Remastered)</td>
              <td>8:35</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>3</td>
              <td class="song_name_column">The Thing That Should Not Be (Remastered)</td>
              <td>6:36</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>4</td>
              <td class="song_name_column">Welcome Home (Sanitarium) (Remastered)</td>
              <td>6:27</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>5</td>
              <td class="song_name_column">Disposable Heroes (Remastered)</td>
              <td>8:16</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>6</td>
              <td class="song_name_column">Leper Messiah (Remastered)</td>
              <td>5:39</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>7</td>
              <td class="song_name_column">Orion (Remastered)</td>
              <td>8:27</td>
            </tr>
            <tr>
              <td class="play_btn_column">
                <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
              </td>
              <td>8</td>
              <td class="song_name_column">Damage, Inc. (Remastered)</td>
              <td>5:32</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<style>
  #title {
    font-size: 3rem;
    font-weight: bold;
  }

  #artist_name {
    font-size: 2rem;
    font-weight: bold;
  }

  #album_info {
    flex-flow: column wrap;
    margin-left: 16px;
    width: 75%;
    font-size: 1.25rem;
  }

  #album_description {
    flex-shrink: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /*scary magic*/
    -webkit-box-orient: vertical;
  }

  #album_card {
    align-content: center;
    align-self: auto;
    display: flex;
    flex-flow: row wrap;
    width: 75vw;
    margin-right: 15vw;
    margin-top: 5vh;
    margin-left: 15vw;
  }

  #song_list {
    align-content: center;
    align-self: auto;
    margin: 0 auto 5vh;
    width: 60vw;
    /*width: 80vw;*/ /*Suggestion à 80 vw*/
  }

  #song_list_table {
    margin: 0 auto auto 0;
    font-size: 1.5rem;
   }

  .song_name_column {
    text-align: left;
  }


  #song_list_table th:not(.song_name_column){
    text-align: center;
  }

  #song_list_table td:not(.song_name_column){
    text-align: center;
  }

  #song_list .btn{
    padding: 0 1rem;
  }

  .play_btn_column {
    width: 80px;
  }


  tr:nth-child(even) {
    background-color: #1e1e1e;
  }

  @media screen and (max-width : 1135px) {
    #album_card{
      margin: 5vh auto 0;
      display: flex;
      flex-flow: column wrap;
      width: 75%;
      /*margin-top: 5vh;*/
    }

    #album_cover {
      display: block;
      horiz-align: center;
      margin: auto;
    }

    #album_info {
      margin:auto;
      justify-content: center;
      text-align: center;
    }

    #album_description {
      width: auto;
    }
  }

  /*Suggestion de media query, mais ça entre en conflit avec */
  /*certain de tes media query actuel concerant l'image de la pochette et le texte*/
  /*@media only screen and (min-device-width : 320px) and (max-device-width : 480px)*/
  /*and (orientation: portrait) {*/
    /*#song_list_table {*/
      /*margin: 0 auto auto 0;*/
      /*font-size: 2rem;*/
    /*}*/

    /*#album_info {*/
      /*flex-flow: column wrap;*/
      /*margin-left: 16px;*/
      /*width: 75%;*/
      /*font-size: 1.6rem;*/
    /*}*/

    /*#title {*/
      /*font-size: 4rem;*/
      /*font-weight: bold;*/
    /*}*/

    /*#artist_name {*/
      /*font-size: 3rem;*/
      /*font-weight: bold;*/
    /*}*/
  /*}*/
</style>
