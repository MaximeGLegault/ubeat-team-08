import axios from 'axios';
import querystring from 'querystring';


// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';
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
  modifyPlaylist(playlistId, track) {
    return axios({
      method: 'post',
      url: `${baseUnsecureUrl}playlists`,
      data: querystring.stringify({ name: playlistId, owner: ownerName, track })
    });
  },
  addTrackToPlaylist(playlistId, track) {
    return axios({
      method: 'post',
      url: `${baseUnsecureUrl}playlists/${playlistId}/tracks`,
      data: querystring.stringify({
        wrapperType: track.wrapperType,
        kind: track.kind,
        artistId: track.artistId,
        collectionId: track.collectionId,
        trackId: track.trackId,
        artistName: track.artistName,
        collectionName: track.collectionId,
        trackName: track.trackName,
        collectionCensoredName: track.collectionCensoredName,
        trackCensoredName: track.trackCensoredName,
        artistViewUrl: track.artistViewUrl,
        collectionViewUrl: track.collectionViewUrl,
        trackViewUrl: track.trackViewUrl,
        previewUrl: track.previewUrl,
        artworkUrl30: track.artworkUrl30,
        artworkUrl60: track.artworkUrl60,
        artworkUrl100: track.artworkUrl100,
        collectionPrice: track.collectionPrice,
        trackPrice: track.trackPrice,
        releaseDate: track.releaseDate,
        collectionExplicitness: track.collectionExplicitness,
        trackExplicitness: track.trackExplicitness,
        discCount: track.discCount,
        discNumber: track.discNumber,
        trackCount: track.trackCount,
        trackNumber: track.trackNumber,
        trackTimeMillis: track.trackTimeMillis,
        country: track.country,
        currency: track.currency,
        primaryGenreName: track.primaryGenreName,
        contentAdvisoryRating: track.contentAdvisoryRating,
        radioStationUrl: track.radioStationUrl
      })
    });
  }
// other things
};
