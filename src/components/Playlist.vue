<template>
  <div id="playlistPage">
    <div id = "playlistName">
      <ul>
        <li>PlayList 1</li>
        <li>PlayList 2</li>
        <li>Playlist 3</li>
      </ul>
    </div>
    <div id = "playlist">
        <h1 class="row justify-content-md-center">Playlist: </h1>
      <div id="trackList">
        <table id="trackListTable">
          <thead>
          <tr>
            <th class="playBtn"></th>
            <th class ="trackNameCol">NAME</th>
            <th class="albumNameCol">ALBUM</th>
            <th class="time">Duration</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="playBtn">
              <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
            </td>
            <td class ="trackNameCol">Song1</td>
            <td class="albumNameCol">Album1</td>
            <td class="time">5:12</td>
          </tr>
          <tr>
            <td class="playBtn">
              <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
            </td>
            <td class ="trackNameCol">Song1</td>
            <td class="albumNameCol">Album1</td>
            <td class="time">5:12</td>
          </tr>
          <tr>
            <td class="playBtn">
              <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
            </td>
            <td class ="trackNameCol">Song1</td>
            <td class="albumNameCol">Album1</td>
            <td class="time">5:12</td>
          </tr>
          <tr>
            <td class="playBtn">
              <a class=" btn deep-purple accent-3"><i class="material-icons md-48">play_arrow</i></a>
            </td>
            <td class ="trackNameCol">Song1</td>
            <td class="albumNameCol">Album1</td>
            <td class="time">5:12</td>
          </tr>
          </tbody>
        </table>
        <p>create playlist: {{playlists}}</p>
        <p>list playlist: {{listPlaylists}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/lib/api';

  export default {
    data() {
      return {
        playlists: {},
        test: {},
        listPlaylists: []
      };
    },
    created() {
      api.createPlaylist()
        .then((value) => {
          this.playlists = value;
        })
         .then(value => console.log(value.name));
      api.getPlaylists()
        .then((value) => {
          this.test = value.id;
          this.listPlaylists.push(value.name);
        });
    },
  };

</script>

<style scoped>
  #playlistPage{
    margin: 0;
    padding: 0;
    display: flex;
  }
  #playlistName{
    border-right: solid 5px #111;
    padding-left: 20px;
    padding-top: 20px;
    width: 250px;
    min-width: 150px;
    min-height: 100vh;
    background-color: #191919 ;
    font-size: 1.5em;
  }
  #playlist{
    width: 100%;
  }
  #playlist h1{
    padding-left: 50px;
    padding-top: 20px;
    margin-top: 0;
    font-size: 4em;
  }
  #trackList {
    align-content: center;
    align-self: auto;
    margin: 0 auto 5vh;
    width: 100%;
  }

  #trackListTable {

    margin: 0 auto auto 0;
    font-size: 1.5rem;
  }
  .trackNameCol{
    text-align: left;
    padding-left: 20px;
    width: 40%;
  }
  .albumNameCol {
    text-align: left;
    width: 40%;
  }


  #trackList .btn{
    padding: 0 1rem;
  }
  .time{
    text-align: center;
    width: 10%;
  }
  .playBtn {
    width: 5%;
    text-align: center;
  }

  #trackListTable tr:nth-child(even) {
    background-color: #1e1e1e;
  }
</style>
