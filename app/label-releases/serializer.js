import ApplicationSerializer  from '../application/serializer';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    id = id || Math.random().toString(36).substring(7);

    let { pagination } = payload;

    let newPayload = {
      id,
      results: payload.releases.map((i) => {
        i.type = 'release';
        return i;
      })
    };

    let document = this._super(store, primaryModelClass, newPayload, id, requestType);

    if (pagination) {
      document.meta = Object.assign({}, { pagination });
    }

    return document;
  }
});
