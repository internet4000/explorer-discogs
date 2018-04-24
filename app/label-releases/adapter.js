import DS from 'ember-data';
import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForFindRecord (id, modelName, snapshot) {
    let baseUrl = this.buildURL('labels', id, snapshot);
    return `${baseUrl}/releases`;
  }
});
