import DS from 'ember-data';
import Serializer from '../application/serializer'

const { EmbeddedRecordsMixin } = DS;

export default Serializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    mainRelease: 'release',
    videos: {
      embedded: 'always'
    }
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.main_release) {
      newPayload.release = payload.main_release
    }

    // if (payload.artists) {
    //   newPayload.artists = payload.artists.map(artist => artist.id)
    // }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  },
  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload;

    if (payload.releases) {
      newPayload.results = payload.releases
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})
