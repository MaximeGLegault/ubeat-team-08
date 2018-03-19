import moment from 'moment';

export default {
  bigArtworkDimension() {
    return 250;
  },
  smallArtworkDimension() {
    return 150;
  },
  getUrlOfBiggerAlbumArtwork(url, albumDimension) {
    const elements = url.split('/');
    const newDimension = `${albumDimension}x${albumDimension}`;
    elements[elements.length - 1] = elements[elements.length - 1].replace('100x100', newDimension);
    return elements.join('/');
  },

  getLengthFromMilliseconds(milliseconds) {
    const duration = moment.duration(milliseconds);
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

  getMusicInfo(tracks) {
    const musicInfo = [];
    tracks.forEach((track) => {
      musicInfo.push({
        url: track.previewUrl,
        title: track.trackName,
        author: track.artistName,
        pic: track.artworkUrl100,
        lrc: null
      });
    });
    return musicInfo;
  }
};
