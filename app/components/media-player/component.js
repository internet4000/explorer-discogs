import Component from '@ember/component';
import Radio4000 from 'npm:radio4000-player';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: 'div',
  classNames: ['MediaPlayer'],
  player: service(),
  mediaPlayer: alias('player.mediaPlayer'),
  didInsertElement() {
    this._super(...arguments);

    let playerDom = this.element.querySelector('radio4000-player');

    // get the js instance of the <radio4000-player> dom el
    let vue = playerDom.__vue_custom_element__.$children[0];
    this.set('mediaPlayer', vue);

    // vue.updatePlaylist(playlist);
  }
});
