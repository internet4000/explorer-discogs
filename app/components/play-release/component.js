import Component from '@ember/component';
import { inject as service} from '@ember/service'

export default Component.extend({
  tagName: 'button',
  player: service(),

  text: 'Play',

  click() {
    const firstVideo = this.get('release.videos.firstObject')
    this.player.play(firstVideo)
  }
});
