import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload.results;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  },
  // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //   payload = {
  //     data: payload.results,
  //     meta: {
  //       pagination: payload.pagination
  //     }
  //   };

  //   delete payload.results;
  //   delete payload.pagination;

  //   return this._super(...arguments);
  // },

  normalize(modelClass, resourceHash) {
    return this._super(...arguments);
  }
});
