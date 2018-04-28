import Service from '@ember/service';

export default Service.extend({
  currentTrack: undefined,
  youtubePlayer: undefined,
  play(videoModel) {
    const player = this.get('youtubePlayer')

    if(this.get('model.provider') === 'youtube') {
      player.load(videoModel.providerId, true);
    }

    this.set('currentTrack', videoModel);
  },
  pause() {
    this.get('youtubePlayer').pause()
  }
});
