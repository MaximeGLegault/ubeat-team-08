import axios from 'axios';
import querystring from 'querystring';
import Cookies from 'js-cookie';


// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';
const baseUrl = 'https://ubeat.herokuapp.com/';
const ownerName = 'owner@gmail.com';

export default {
  getTracksOfAlbum(collectionId) {
    return axios({
      method: 'get',
      url: `${baseUrl}albums/${collectionId}/tracks`,
      headers: {
        Authorization: Cookies.get('token')
      }
    }).then(value => value.data);
  },
  getAlbum(collectionId) {
    return axios({
      method: 'get',
      url: `${baseUrl}albums/${collectionId}`,
      headers: {
        Authorization: Cookies.get('token')
      }
    }).then(value => value.data);
  },
  getAlbums(artistId) {
    return axios({
      method: 'get',
      url: `${baseUrl}artists/${artistId}/albums`,
      headers: {
        Authorization: Cookies.get('token')
      }
    }).then(value => value.data);
  },
  getArtist(artistId) {
    return axios({
      method: 'get',
      url: `${baseUrl}artists/${artistId}`,
      headers: {
        Authorization: Cookies.get('token')
      }
    }).then(value => value.data);
  },
  getPlaylists(playlistId) {
    return axios.get(`${baseUnsecureUrl}playlists/${playlistId}`)
      .then(value => value.data);
  },
  createPlaylist(playlistName) {
    return axios({
      method: 'post',
      url: `${baseUrl}playlists`,
      headers: {
        Authorization: Cookies.get('token')
      },
      data: querystring.stringify({ name: playlistName, owner: ownerName })
    });
  },
  addTrackToPlaylist(playlistId, track) {
    return axios({
      method: 'post',
      url: `${baseUrl}playlists/${playlistId}/tracks`,
      headers: {
        Authorization: Cookies.get('token')
      },
      data: querystring.stringify(track)
    });
  },
  editNamePlaylist(playlist, newName) {
    return axios({
      method: 'put',
      url: `${baseUrl}playlists/${playlist}`,
      headers: {
        Authorization: Cookies.get('token')
      },
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
