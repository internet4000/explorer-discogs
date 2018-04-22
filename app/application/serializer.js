import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // Convert attributes from 'my_attribute' to 'myAttribute'
  keyForAttribute(attr) {
    return attr.underscore()
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload.results;
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
