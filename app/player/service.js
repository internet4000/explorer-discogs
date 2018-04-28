import Service from '@ember/service';
import { bool } from '@ember/object/computed';

export default Service.extend({
  currentTrack: undefined,
  youtubePlayer: undefined,
  mediaPlayer: undefined,

  hasTrack: bool('currentTrack'),

  play: function async (videoModel) {
    this.playTrack(videoModel);
  },

  playTrack: async function (videoModel) {
    let playlist = await this.buildPlaylistExport(videoModel);
    this.loadPlaylistInPlayer(playlist);
    this.set('currentTrack', videoModel);
  },

  buildPlaylistExport: async function (videoModel) {
    let release = await videoModel.get('release');
    let releaseVideos = await release.get('videos');

    let playlist = {
      title: `${release.title} - ${release.artistsSort}`,
      image: release.get('images')[0].uri150,
      tracks: releaseVideos.map(this.serializeVideo).reverse()
    };

    return playlist;
  },

  serializeVideo(videoModel) {

    let serializedItem = videoModel.serialize({
      includeId: true
    });

    let { id, title, url } = serializedItem;

    return {
      id,
      title,
      url,
      ytid: serializedItem.providerId
    }

  },

  loadPlaylistInPlayer(playlist) {
    this.get('mediaPlayer').updatePlaylist(playlist);
	}

});
