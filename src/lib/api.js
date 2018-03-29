import axios from 'axios';
import querystring from 'querystring';


// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';
const baseUrl = 'https://ubeat.herokuapp.com/';
const ownerName = 'owner@gmail.com';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1YWJkMDQ2NTQwNjE3YzAwMDQ3MjY3YTEiLCJleHAiOjE1MjI0MjMzOTI2NDF9.qfT1CTi-NeSq9qVzxJfEIM4y5bpnoa5acXVDIPf-Bd0';

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
      data: querystring.stringify({
        name: playlistName,
        owner: ownerName
      })
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
  getSearch(searchTerm) {
    return axios.get(`${baseUrl}${token}/search?q=${searchTerm}`)
      .then(value => value.data);
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
// other things
};
