import 'npm:yt-player';
import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  player: service(),
  currentTrack: alias('player.currentTrack')
});
