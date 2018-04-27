import Service from '@ember/service';
import youtubeRegex from 'npm:youtube-regex';

const youtubeIdFromUrl = (url) => {
  const results = youtubeRegex().exec(url);
	if (!results) {
		return false;
	}
	return results[1];
};

export default Service.extend({
  currentTrack: undefined,
  youtubePlayer: undefined,
  play(model) {
    const player = this.get('youtubePlayer')
    if (!model) {
      player.play()
      return
    }
    player.load(youtubeIdFromUrl(model.uri), true);
    this.set('currentTrack', model);
  },
  pause() {
    this.get('youtubePlayer').pause()
  }
});
