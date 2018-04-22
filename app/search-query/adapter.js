import DS from 'ember-data';
import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  namespace: 'database',
  pathForType() {
    return 'search';
  }
});
