import DS from 'ember-data';
import ApplicationSerializer  from '../application/serializer';

export default ApplicationSerializer .extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {
      id,
      releases: payload.releases.map((i) => {
        i.type = 'release';
        return i;
      })
    };

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
