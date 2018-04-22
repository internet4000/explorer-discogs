import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload.results;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
