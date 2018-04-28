import Component from '@ember/component';
import {inject} from '@ember/service'
import {later} from '@ember/runloop'

export default Component.extend({
  tagName: 'button',

  player: inject(),
  // playlist: [],

  click() {
    // Convert to an array of ids
    const ids = this.playlist.map(p => p.providerId)
    // Start the player
    this.player.play(this.get('playlist.firstObject'))
    later(() => {
      this.player.loadPlaylist(ids)
    }, 1000)
  }
});
