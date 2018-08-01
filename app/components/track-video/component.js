import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  model: undefined,
  player: service(),

  actions: {
    click() {
      this.player.play(this.model);
    }
  }
});
