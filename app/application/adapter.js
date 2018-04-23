import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: 'https://api.discogs.com',

  // Querying Discogs "search" endpoints requires authentication.
  // https://www.discogs.com/developers/#page:authentication,header:authentication-discogs-auth-flow
  headers: computed(function() {
    return {
      'Authorization': 'Discogs key=cnoOBdbCifZbuXMwNtph, secret=VzlAmAOVmCjeLFjXlFXZwSYYRarmJHJR'
    };
  }),

  shouldBackgroundReloadRecord() {
    // Don't fetch records again if they are already in the store.
    return false
  }
});
