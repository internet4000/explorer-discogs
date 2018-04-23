import DS from 'ember-data';
import { computed } from '@ember/object';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch'

export default DS.RESTAdapter.extend(AdapterFetch, {
  host: 'https://api.discogs.com',

  // Querying Discogs "search" endpoints requires authentication.
  // https://www.discogs.com/developers/#page:authentication,header:authentication-discogs-auth-flow
  headers: computed(function() {
    return {
      'Authorization': 'Discogs key=cnoOBdbCifZbuXMwNtph, secret=VzlAmAOVmCjeLFjXlFXZwSYYRarmJHJR'
    };
  })
});
