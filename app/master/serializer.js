import Serializer from '../application/serializer'

export default Serializer.extend({
  attrs: {
    'mainRelease': 'release'
  },
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = payload

    if (payload.main_release) {
      newPayload.release = payload.main_release
    }

    return this._super(store, primaryModelClass, newPayload, id, requestType)
  }
})
