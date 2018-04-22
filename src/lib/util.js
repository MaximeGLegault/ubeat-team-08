import moment from 'moment';

export default {
  getUrlOfBiggerAlbumArtwork(url, albumDimension) {
    const elements = url.split('/');
    const newDimension = `${albumDimension}x${albumDimension}`;
    elements[elements.length - 1] = elements[elements.length - 1].replace('100x100', newDimension);
    return elements.join('/');
  },

  getLength(amount, unit = '') {
    let duration;
    if (unit) {
      duration = moment.duration(amount, unit);
    } else {
      duration = moment.duration(amount); // milliseconds
    }
    let hours = duration.hours();
    hours = hours ? `${hours}:` : '';

    let minutes = duration.minutes();
    if (minutes === 0) {
      minutes = '00:';
    } else if (minutes < 10) {
      minutes = `0${minutes}:`;
    } else {
      minutes = `${minutes}:`;
    }

    let seconds = duration.seconds();
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${hours}${minutes}${seconds}`;
  },

  getPlaylistsOfUser(playlist, userId) {
    return playlist.filter(pl => pl.owner.id === userId);
  }
};
