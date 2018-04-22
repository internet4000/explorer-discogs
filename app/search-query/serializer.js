import DS from 'ember-data';
import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  extractMeta(store, typeClass, payload) {
    if (payload && payload.hasOwnProperty('pagination')) {
      let meta = payload.pagination;
      delete payload.pagination;
      return meta;
    }
  },
  normalizeQueryResponse (store, primaryModelClass, payload, id, requestType) {
    payload = payload.results;
    debugger;
    return this._super(...arguments);
  }
});
