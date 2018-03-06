// todo remove the unsecure and add credentials after TP2!
const baseUrl = 'https://ubeat.herokuapp.com/unsecure/';


export default {
  getTracksOfAlbum(collectionId) {
    return fetch(`${baseUrl}albums/${collectionId}/tracks`)
      .then(value => value.json());
  },
  getAlbum(collectionId) {
    return fetch(`${baseUrl}albums/${collectionId}`)
      .then(value => value.json());
  },
// other things
};
