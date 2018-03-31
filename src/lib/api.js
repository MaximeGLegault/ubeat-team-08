import axios from 'axios';
import querystring from 'querystring';


// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';
const baseUrl = 'https://ubeat.herokuapp.com/';
const ownerName = 'owner@gmail.com';

export default {
  getTracksOfAlbum(collectionId) {
    return axios.get(`${baseUnsecureUrl}albums/${collectionId}/tracks`) // TODO switch to baseUrl after TP2
      .then(value => value.data);
  },
  getAlbum(collectionId) {
    return axios.get(`${baseUnsecureUrl}albums/${collectionId}`) // TODO switch to baseUrl after TP2
      .then(value => value.data);
  },
  getAlbums(artistId) {
    return axios.get(`${baseUnsecureUrl}artists/${artistId}/albums`) // TODO switch to baseUrl after TP2
      .then(value => value.data);
  },
  getArtist(artistId) {
    return axios.get(`${baseUnsecureUrl}artists/${artistId}`) // TODO switch to baseUrl after TP2
      .then(value => value.data);
  },
  getPlaylists(playlistId) {
    return axios.get(`${baseUnsecureUrl}playlists/${playlistId}`)
      .then(value => value.data);
  },
  createPlaylist(playlistName) {
    return axios({
      method: 'post',
      url: `${baseUnsecureUrl}playlists`,
      data: querystring.stringify({ name: playlistName, owner: ownerName })
    });
  },
  addTrackToPlaylist(playlistId, track) {
    return axios({
      method: 'post',
      url: `${baseUnsecureUrl}playlists/${playlistId}/tracks`,
      data: querystring.stringify(track)
    });
  },
  editNamePlaylist(playlist, newName) {
    return axios({
      method: 'put',
      url: `${baseUnsecureUrl}playlists/${playlist}`,
      data: querystring.stringify({ name: newName })
    });
  },
  loginUser(userEmail, userPassword) {
    return axios({
      method: 'post',
      url: `${baseUrl}login`,
      data: querystring.stringify({ email: userEmail, password: userPassword })
    });
  },
  logout() {
    return axios.get(`${baseUrl}logout`);
  },
  signUp(userName, userEmail, userPassword) {
    return axios({
      method: 'post',
      url: `${baseUrl}signup`,
      data: querystring.stringify({ name: userName, email: userEmail, password: userPassword })
    });
  }
// other things
};
