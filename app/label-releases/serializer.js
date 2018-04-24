import DS from 'ember-data';
import ReleaseSerializer from '../release/serializer';

export default ReleaseSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {
      id,
      releases: payload.releases
    };

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
