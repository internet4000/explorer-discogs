import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  player: service(),
  tagName: 'menu',
  actions: {
    play() {
      this.player.play()
    },
    pause() {
      this.player.pause()
    }
  }
});
