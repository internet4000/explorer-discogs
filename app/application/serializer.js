import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // Convert attributes from 'under_scored' to 'camelCased'
  keyForAttribute(attr) {
    return attr.underscore()
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {

    let { results, releases, pagination } = payload;

    let newPayload = results || releases;

    let document = this._super(store, primaryModelClass, newPayload, id, requestType);

    if (pagination) {
      document.meta = Object.assign({}, { pagination });
    }

    return document;
  }
});
