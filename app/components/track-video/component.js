import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  model: undefined,
  player: service(),

  actions: {
    click() {
      this.get('player').play(this.get('model'));
    }
  }
});
