import Component from '@ember/component';
import {inject} from '@ember/service'
import {youtubeIdFromUrl} from '../../player/service'
import {later} from '@ember/runloop'

export default Component.extend({
  tagName: 'button',

  player: inject(),
  // playlist: [],

  click() {
    // Convert to an array of ids
    const ids = this.playlist.map(p => youtubeIdFromUrl(p.uri))
    // Start the player
    this.player.play(this.playlist[0])
    later(() => {
      this.player.loadPlaylist(ids)
    }, 1000)
  }
});
