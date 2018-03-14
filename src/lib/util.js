import moment from 'moment';

export default {
  getUrlOfBiggerAlbumArtwork(url, albumDimension) {
    const elements = url.split('/');
    const newDimension = `${albumDimension}x${albumDimension}`;
    elements[elements.length - 1] = elements[elements.length - 1].replace('100x100', newDimension);
    return elements.join('/');
  },

  getLengthFromMilliseconds(milliseconds) {
    return moment(milliseconds, 'x').format('mm:ss');
  }
};
