import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  host: 'https://api.discogs.com',
  headers: computed(function() {
    return {
      'Authorization': 'Discogs key=cnoOBdbCifZbuXMwNtph, secret=VzlAmAOVmCjeLFjXlFXZwSYYRarmJHJR'
    };
  })
});
