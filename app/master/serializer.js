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

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})

