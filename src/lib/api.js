import axios from 'axios';
import querystring from 'querystring';
import Cookies from 'js-cookie';


const baseUrl = 'https://ubeat.herokuapp.com/';

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
    return axios({
      method: 'get',
      url: `${baseUrl}playlists/${playlistId}`,
      headers: {
        Authorization: Cookies.get('token')
      }
    }).then(value => value.data);
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

  updatePlaylist(playlistWithChanges) {
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

  getSearch(searchTerm, searchLimit = 10) {
    return axios({
      method: 'get',
      url: `${baseUrl}search`,
      headers: {
        Authorization: Cookies.get('token')
      },
      params: {
        q: searchTerm,
        limit: searchLimit
      }
    }).then(value => value.data);
      // headers: { 'Cache-Control': 'no-cache' }
  },

  getGlobalData() {

  },

  getSearchByTrack(searchTerm, searchLimit) {
    return axios({
      method: 'get',
      url: `${baseUrl}search/tracks`,
      headers: {
        Authorization: Cookies.get('token')
      },
      params: {
        q: searchTerm,
        limit: searchLimit
      }
    }).then(value => value.data);
    // headers: { 'Cache-Control': 'no-cache' }
  },

  getSearchByArtist(searchTerm, searchLimit) {
    return axios({
      method: 'get',
      url: `${baseUrl}search/artists`,
      headers: {
        Authorization: Cookies.get('token')
      },
      params: {
        q: searchTerm,
        limit: searchLimit
      }
    }).then(value => value.data);
    // headers: { 'Cache-Control': 'no-cache' }
  },

  getSearchByAlbum(searchTerm, searchLimit) {
    return axios({
      method: 'get',
      url: `${baseUrl}search/albums`,
      headers: {
        Authorization: Cookies.get('token')
      },
      params: {
        q: searchTerm,
        limit: searchLimit
      }
    }).then(value => value.data);
    // headers: { 'Cache-Control': 'no-cache' }
  },

  getSearchByUser(searchTerm) {
    return axios({
      method: 'get',
      url: `${baseUrl}search/users`,
      headers: {
        Authorization: Cookies.get('token')
      },
      params: {
        q: searchTerm
      }
    }).then(value => value.data);
    // headers: { 'Cache-Control': 'no-cache' }
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
