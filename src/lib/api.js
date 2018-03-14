// const baseUrl = 'https://ubeat.herokuapp.com/'; // TODO switch to baseUrl after TP2
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';

export default {
  getTracksOfAlbum(collectionId) {
    return fetch(`${baseUnsecureUrl}albums/${collectionId}/tracks`) // TODO switch to baseUrl after TP2
      .then(value => value.json());
  },
  getAlbum(collectionId) {
    return fetch(`${baseUnsecureUrl}albums/${collectionId}`) // TODO switch to baseUrl after TP2
      .then(value => value.json());
  },
  getAlbums(artistId) {
    return fetch(`${baseUnsecureUrl}artists/${artistId}/albums`) // TODO switch to baseUrl after TP2
      .then(value => value.json());
  },
  getArtist(artistId) {
    return fetch(`${baseUnsecureUrl}artists/${artistId}`) // TODO switch to baseUrl after TP2
      .then(value => value.json());
  }

// other things
};
