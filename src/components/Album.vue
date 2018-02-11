 <template>
    <div>
      <div id="album_card">
        <div id="album_cover">
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/4d/6d/bd/4d6dbd44-a71b-8f11-d5b8-e589a3777b69/858978005196.png/268x0w.jpg">
        </div>
        <div id="album_info">
          <h1 id="title">Master of Puppets (Remastered)</h1>
          <p id="artist_name">Metallica</p>
          <p id="album_description" style="overflow: hidden; width: 50vw;">
            Master of Puppets, sorti le 3 mars 1986, est le troisième album studio du groupe de Thrash metal Metallica. C'est le dernier album du groupe avec le bassiste Cliff Burton, ce dernier décède en effet dans un accident de bus en Suède lors de la tournée de promotion de l'album. Master of Puppets est classé 24ᵉ place sur le Billboard 200 charts. C'est le premier album de thrash metal à être certifié disque de platine, et le 9 juin 2003, il a été certifié six fois disque de platine par le Recording Industry Association of America, et s'est vendu à plus de six millions de copies aux États-Unis.

            Master of Puppets a reçu des critiques dithyrambiques par la critique musicale et a été inclus dans les meilleures listes d'albums par certains magazines. Sa puissance, sa virtuosité et ses paroles politiques et colériques ont attiré les éloges de la critique en dehors de la communauté metal. L'album est largement considéré comme le plus gros effort du groupe à l'époque, et devenu l'un des albums de thrash metal les plus influents de tous les temps. Beaucoup de groupes de tous les genres de heavy metal ont repris des chansons de l'album au fil des années, y compris sur les albums-hommage.
          </p>
          <p>1986 • 8 chansons • 54:44 • Rock</p>
          <a href="https://geo.itunes.apple.com/ca/album/master-of-puppets-remastered/1275819392?i=1275819878&mt=1&app=music&itscg=30200&itsct=afftoolset_1" style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/music-lrg.svg) no-repeat;width:157px;height:45px;background-size:contain;"></a>
        </div>
      </div>
      <div id="song_list">
        <table id="song_list_table">
          <thead>
            <tr>
              <th class="play_btn_column"></th>
              <th>#</th>
              <th class="song_name_column">NOM</th>
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
    font-size: 2rem;
    font-weight: bold;
  }

  #artist_name {
    font-size: 1rem;
    font-weight: bold;
  }

  #album_info {
    flex-flow: column wrap;
    margin-left: 16px;
  }

  #album_description {
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
  }

  #song_list_table {
    margin: 0 auto auto 0;
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
      width: 50%;
      /*margin-top: 5vh;*/
    }

    #album_cover {
      display: block;
      width: 50%;
      margin: auto;
    }

    #album_info {
      margin:auto;
      justify-content: center;
      text-align: center;
    }
  }
</style>
