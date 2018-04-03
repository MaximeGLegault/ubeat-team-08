import axios from 'axios';
import querystring from 'querystring';
import Cookies from 'js-cookie';


// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';
const baseUrl = 'https://ubeat.herokuapp.com/';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1YWJkMDQ2NTQwNjE3YzAwMDQ3MjY3YTEiLCJleHAiOjE1MjI0MjMzOTI2NDF9.qfT1CTi-NeSq9qVzxJfEIM4y5bpnoa5acXVDIPf-Bd0';

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
      data: querystring.stringify({ name: playlistName })
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

  updatePlaylistName(playlistWithChanges) {
    return axios({
      method: 'put',
      url: `${baseUrl}playlists/${playlistWithChanges.id}`,
      headers: {
        Authorization: Cookies.get('token')
      },
      data: querystring.stringify({
        name: playlistWithChanges.name,
        id: playlistWithChanges.id,
        tracks: JSON.stringify(playlistWithChanges.tracks)
      })
    });
  },

  getSearch(q) {
    return axios.get(`${baseUnsecureUrl}search`, {
      params: { q }
    }).then(value => value.data);
  },
  getSearchByAlbums(album) {
    return axios.get(`${baseUrl}${token}/search/albums?q=${album}`)
      .then(value => value.data);
  },
  getSearchByArtists(artist) {
    return axios.get(`${baseUrl}${token}/search/artists?q=${artist}`)
      .then(value => value.data);
  },
  getSearchTracks(track) {
    return axios.get(`${baseUrl}${token}/search/tracks?q=${track}`)
      .then(value => value.data);
  },
  getSearchByUsers(user) {
    return axios.get(`${baseUrl}${token}/search/users?q=${user}`)
      .then(value => value.data);
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
