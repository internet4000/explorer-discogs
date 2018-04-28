import Service from '@ember/service';

export default Service.extend({
  currentTrack: undefined,
  youtubePlayer: undefined,
  play(playlist, id) {
    const player = this.get('youtubePlayer')

    player.load(id, true);
    this.set('currentTrack', model);
  },
  pause() {
    this.get('youtubePlayer').pause()
  }
});
