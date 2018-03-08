/* eslint-disable */
// const baseUrl = 'https://ubeat.herokuapp.com/';
const baseUnsecureUrl = 'https://ubeat.herokuapp.com/unsecure/';

export const getAlbums = artistId => {
  return fetch(`${baseUnsecureUrl}artists/${artistId}/albums`)
    .then(response => response.json())
    .then(json => {
      return json.results
    })
    .catch(() => {
      console.error('unable to fetch albums');
    })
};

export const getArtist = artistId => {
  return fetch(`${baseUnsecureUrl}artists/${artistId}`)
    .then(response => response.json())
    .then(json => {
      return json.results[0]
    })
    .catch(() => {
      console.error('unable to fetch artist');
    })
};
