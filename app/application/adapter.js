import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch'

export default DS.RESTAdapter.extend(AdapterFetch, {
  // host: 'https://api.discogs.com',
  host: 'https://edapi.glitch.me',

  // Don't fetch records again if they are already in the store.
  shouldBackgroundReloadRecord() {
    return false
  }
});
