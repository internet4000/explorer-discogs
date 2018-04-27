import YTPlayer from 'npm:yt-player';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  player: service(),
  youtubePlayer: alias('player.youtubePlayer'),
  currentTrack: alias('player.currentTrack'),
  didInsertElement() {
    this._super(...arguments);

    const playerDom = this.element.querySelector('#Player');
    const player = new YTPlayer(playerDom, {
      annotations: false,
      info: false,
      related: false,
      modestBranding: false
    });

    this.set('youtubePlayer', player);

    player.on('playing', () => {
      console.log(this.get('youtubePlayer').getDuration());
    });
    player.on('error', err => {
      console.error(err)
    });
  }
});
