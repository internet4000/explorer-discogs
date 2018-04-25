import ApplicationAdapter from '../application/adapter';
import { computed } from '@ember/object';

const Authorization = 'Discogs key=cnoOBdbCifZbuXMwNtph, secret=VzlAmAOVmCjeLFjXlFXZwSYYRarmJHJR'

export default ApplicationAdapter.extend({
  // Don't use proxy for search. Not ready yet.
  host: 'https://api.discogs.com',

  namespace: 'database',

  pathForType() {
    return 'search';
  },

  // Querying Discogs "search" endpoints requires authentication.
  headers: computed(function() {
    return {Authorization}
  })
});
