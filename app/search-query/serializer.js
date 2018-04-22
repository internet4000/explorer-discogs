import DS from 'ember-data';
import ApplicationSerializer from '../application/serializer';

export default ApplicationSerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType) {
    payload = {
      data: payload.results,
      meta: {
        pagination: payload.pagination
      },
      errors: payload.errors || []
    };
    delete payload.results;
    delete payload.pagination;
    delete payload.errors;

    // return this._super(...arguments);
    return payload;
  }
});
