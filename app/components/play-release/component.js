import Component from '@ember/component';
import { inject as service} from '@ember/service'

export default Component.extend({
  tagName: 'button',
  player: service(),

  text: 'Play',

  click() {
    this.player.play(this.get('release.videos.firstObject'));
  }
});
