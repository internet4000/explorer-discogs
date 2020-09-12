import Component from '@ember/component';
import 'npm:radio4000-player';
import { inject as service } from '@ember/service';
import { readOnly } from '@ember/object/computed';
import {later} from '@ember/runloop'

export default Component.extend({
  tagName: 'div',
  classNames: ['MediaPlayer'],
  classNameBindings: ['hasTrack:is--active'],
  player: service(),
  hasTrack: readOnly('player.hasTrack'),
  didInsertElement() {
    this._super(...arguments);

    let playerDom = this.element.querySelector('radio4000-player');

    // Firefox needed this wrapper
    later(() => {
      // Get the JS instance of the Vue app from <radio4000-player> element
      let vue = playerDom.__vue_custom_element__.$children[0];
      this.set('player.mediaPlayer', vue);
    }, 16)
  }
});
