import DS from 'ember-data';
import ReleaseSerializer from '../release/serializer';

export default ReleaseSerializer.extend({
  attr: {
    releases: {
      embedded: 'always'
    }
  },
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
