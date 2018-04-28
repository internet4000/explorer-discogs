import Service from '@ember/service';

export default Service.extend({
  currentTrack: undefined,
  youtubePlayer: undefined,
  mediaPlayer: undefined,

  play(videoModel) {

    // prepare the track for the player
    let track = Object.assign({}, {
      id: videoModel.id,
      title: videoModel.title,
      url: videoModel.uri,
      ytid: videoModel.providerId
      // body: '',
      // channel: '',
      // created: '',
    })

    let release = videoModel.get('release');
    debugger;

    this.set('currentTrack', videoModel);
  },
  pause() {
    this.get('youtubePlayer').pause();
  },
  loadPlaylistInPlayer(playlist) {
    this.get('mediaPlayer').player.updatePlaylist(playlist);
	}

});
