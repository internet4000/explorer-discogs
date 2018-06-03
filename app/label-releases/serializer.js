import ApplicationSerializer  from '../application/serializer';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let { pagination } = payload;

    let newPayload = {
      id,
      releases: payload.releases.map((i) => {
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
