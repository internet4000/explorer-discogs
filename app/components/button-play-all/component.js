import Component from '@ember/component';
import {inject} from '@ember/service'

export default Component.extend({
  tagName: 'button',

  player: inject(),
  // playlist: [],

  click() {
    this.player.play(this.get('playlist.firstObject'))
  }
});
